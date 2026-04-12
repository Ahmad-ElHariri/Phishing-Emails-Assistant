## Backend

This backend loads the trained TF-IDF vectorizer and phishing classifier, exposes a small HTTP API, and returns phishing predictions for email content extracted by the browser extension.

### Run

```powershell
cd backend
python -m pip install -r requirements.txt
python app.py
```

The API starts on `http://127.0.0.1:5000`.

### Endpoints

- `GET /health` checks that the backend and model files are loaded.
- `POST /predict` accepts an `emailData` object and returns the model decision, phishing probability, confidence percent, and a short list of reasons.

### Example request

```json
{
  "emailData": {
    "subject_text": "Urgent: Verify your account",
    "from_email": "security@example.com",
    "from_domain": "example.com",
    "body_visible_text": "Click here immediately to confirm your password.",
    "links": [
      {
        "href": "https://example-security-check.com",
        "visible_text": "Verify now"
      }
    ],
    "link_domains": ["example-security-check.com"],
    "attachments": [],
    "has_attachments": false
  }
}
```
