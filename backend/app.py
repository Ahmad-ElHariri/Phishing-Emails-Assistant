from __future__ import annotations

from pathlib import Path
from typing import Any

import joblib
from flask import Flask, jsonify, request
from flask_cors import CORS


BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "phishing_model.pkl"
VECTORIZER_PATH = BASE_DIR / "tfidf_vectorizer.pkl"

app = Flask(__name__)
CORS(app)

model = joblib.load(MODEL_PATH)
vectorizer = joblib.load(VECTORIZER_PATH)

PHISHING_CLASS = 1
PHISHING_THRESHOLD = 0.8889
SUSPICIOUS_THRESHOLD = 0.6889



def normalize_text(value: Any) -> str:
    if value is None:
        return ""
    return str(value).strip()


def build_model_text(email_data: dict[str, Any]) -> str:
    subject = normalize_text(email_data.get("subject_text"))
    sender_name = normalize_text(email_data.get("from_display_name"))
    sender_email = normalize_text(email_data.get("from_email"))
    sender_domain = normalize_text(email_data.get("from_domain"))
    reply_to = normalize_text(email_data.get("reply_to_email"))
    reply_domain = normalize_text(email_data.get("reply_to_domain"))
    body = normalize_text(email_data.get("body_visible_text"))
    sent_datetime = normalize_text(email_data.get("sent_datetime"))

    link_text = " ".join(
        " ".join(
            filter(
                None,
                [
                    normalize_text(link.get("visible_text")),
                    normalize_text(link.get("href")),
                ],
            )
        )
        for link in email_data.get("links", [])
        if isinstance(link, dict)
    )

    attachment_text = " ".join(
        " ".join(
            filter(
                None,
                [
                    normalize_text(attachment.get("filename")),
                    normalize_text(attachment.get("extension")),
                ],
            )
        )
        for attachment in email_data.get("attachments", [])
        if isinstance(attachment, dict)
    )

    link_domains = " ".join(email_data.get("link_domains", []) or [])

    parts = [
        subject,
        sender_name,
        sender_email,
        sender_domain,
        reply_to,
        reply_domain,
        sent_datetime,
        body,
        link_text,
        link_domains,
        attachment_text,
    ]

    return " ".join(part for part in parts if part)


def build_reasons(email_data: dict[str, Any], phishing_score: float) -> list[str]:
    reasons: list[str] = []
    subject = normalize_text(email_data.get("subject_text")).lower()
    body = normalize_text(email_data.get("body_visible_text")).lower()
    sender_domain = normalize_text(email_data.get("from_domain")).lower()
    reply_domain = normalize_text(email_data.get("reply_to_domain")).lower()

    suspicious_terms = [
        "urgent",
        "verify",
        "password",
        "bank",
        "click here",
        "immediately",
        "account suspended",
        "confirm",
        "payment",
        "invoice",
        "reset",
        "security alert",
    ]

    matched_terms = [
        term for term in suspicious_terms if term in subject or term in body
    ]
    if matched_terms:
        reasons.append(
            "Suspicious wording detected: " + ", ".join(matched_terms[:4])
        )

    links = email_data.get("links", []) or []
    if links:
        reasons.append(f"Email contains {len(links)} link(s).")

    if email_data.get("has_attachments"):
        reasons.append("Email includes attachment(s).")

    if sender_domain and reply_domain and sender_domain != reply_domain:
        reasons.append("Reply-to domain does not match sender domain.")

    unique_link_domains = [
        domain for domain in (email_data.get("link_domains", []) or []) if domain
    ]
    if sender_domain and unique_link_domains:
        mismatched_domains = [
            domain for domain in unique_link_domains if domain != sender_domain
        ]
        if mismatched_domains:
            reasons.append(
                "Embedded link domain differs from sender domain."
            )

    if phishing_score >= PHISHING_THRESHOLD:
        reasons.insert(0, "Model confidence is high for phishing content.")
    elif phishing_score >= SUSPICIOUS_THRESHOLD:
        reasons.insert(0, "Model confidence is elevated and worth reviewing.")
    else:
        reasons.insert(0, "Model confidence is low for phishing content.")

    if not body and not subject:
        reasons.append("Very little visible email text was available to analyze.")

    return reasons[:5]


def score_email(email_data: dict[str, Any]) -> dict[str, Any]:
    model_text = build_model_text(email_data)
    if not model_text:
        raise ValueError("No email text could be extracted for analysis.")

    transformed = vectorizer.transform([model_text])
    prediction = int(model.predict(transformed)[0])

    class_probabilities = model.predict_proba(transformed)[0]
    class_index = list(model.classes_).index(PHISHING_CLASS)
    phishing_probability = float(class_probabilities[class_index])

    if phishing_probability >= PHISHING_THRESHOLD:
        label = "Phishing"
    elif phishing_probability >= SUSPICIOUS_THRESHOLD:
        label = "Suspicious"
    else:
        label = "Safe"

    return {
        "label": label,
        "prediction": prediction,
        "phishing_probability": round(phishing_probability, 4),
        "confidence_percent": round(phishing_probability * 100, 2),
        "reasons": build_reasons(email_data, phishing_probability),
        "model_text_preview": model_text[:500],
    }


@app.get("/health")
def health() -> Any:
    return jsonify(
        {
            "status": "ok",
            "model_loaded": True,
            "vectorizer_loaded": True,
            "phishing_class": PHISHING_CLASS,
        }
    )


@app.post("/predict")
def predict() -> Any:
    payload = request.get_json(silent=True) or {}
    email_data = payload.get("emailData")

    if not isinstance(email_data, dict):
        return jsonify({"error": "Request body must include an emailData object."}), 400

    try:
        analysis = score_email(email_data)
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400
    except Exception as exc:  # pragma: no cover - defensive API guard
        return jsonify({"error": f"Prediction failed: {exc}"}), 500

    return jsonify(
        {
            "analysis": analysis,
            "metadata": {
                "model_type": type(model).__name__,
                "vectorizer_type": type(vectorizer).__name__,
            },
        }
    )


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
