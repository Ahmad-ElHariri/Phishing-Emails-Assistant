const BACKEND_URL = "http://127.0.0.1:5000";
const REQUEST_TIMEOUT_MS = 10000;

const extractBtn = document.getElementById("extractBtn");
const statusDiv = document.getElementById("status");
const outputPre = document.getElementById("output");

function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getBadgeColor(label) {
  if (label === "Phishing") return "#d93025";
  if (label === "Suspicious") return "#f9ab00";
  return "#188038";
}

async function analyzeWithBackend(emailData) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(`${BACKEND_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ emailData }),
      signal: controller.signal
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || `Backend request failed (${response.status})`);
    }

    return data.analysis;
  } finally {
    clearTimeout(timeoutId);
  }
}

function buildSummaryHtml(emailData, analysis) {
  const sender = escapeHtml(emailData.from_email || "Not found");
  const senderName = escapeHtml(emailData.from_display_name || "Not found");
  const subject = escapeHtml(emailData.subject_text || "Not found");
  const domain = escapeHtml(emailData.from_domain || "Not found");
  const sentDate = escapeHtml(emailData.sent_datetime || "Not found");
  const attachmentText = emailData.has_attachments ? "Yes" : "No";
  const badgeColor = getBadgeColor(analysis.label);
  const reasonsHtml = (analysis.reasons || [])
    .map((reason) => `<li>${escapeHtml(reason)}</li>`)
    .join("");

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <div style="
        display: inline-block;
        padding: 6px 10px;
        border-radius: 999px;
        color: white;
        font-weight: bold;
        background: ${badgeColor};
        margin-bottom: 12px;
      ">
        ${escapeHtml(analysis.label)} (${escapeHtml(analysis.confidence_percent)}%)
      </div>

      <div><strong>Subject:</strong> ${subject}</div>
      <div><strong>Sender Name:</strong> ${senderName}</div>
      <div><strong>Sender Email:</strong> ${sender}</div>
      <div><strong>Sender Domain:</strong> ${domain}</div>
      <div><strong>Date:</strong> ${sentDate}</div>
      <div><strong>Attachments:</strong> ${attachmentText}</div>
      <div><strong>Links Found:</strong> ${emailData.links ? emailData.links.length : 0}</div>
      <div><strong>Phishing Probability:</strong> ${escapeHtml(analysis.phishing_probability)}</div>

      <div style="margin-top: 12px;"><strong>Reasons:</strong></div>
      <ul style="margin-top: 6px; padding-left: 18px;">
        ${reasonsHtml || "<li>No extra explanation available.</li>"}
      </ul>
    </div>
  `;
}

function extractEmailFromTab(tabId) {
  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(tabId, { action: "extract_email" }, (response) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
        return;
      }

      if (!response) {
        reject(new Error("No response received from Gmail."));
        return;
      }

      if (!response.success) {
        reject(new Error(response.error || "Email extraction failed."));
        return;
      }

      resolve(response.data);
    });
  });
}

extractBtn.addEventListener("click", async () => {
  statusDiv.textContent = "Extracting email from Gmail...";
  outputPre.textContent = "";

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab || !tab.id) {
      statusDiv.textContent = "No active tab found.";
      return;
    }

    if (!tab.url || !tab.url.startsWith("https://mail.google.com/")) {
      statusDiv.textContent = "Open a Gmail message first.";
      return;
    }

    const emailData = await extractEmailFromTab(tab.id);
    statusDiv.textContent = "Sending email to backend model...";

    const analysis = await analyzeWithBackend(emailData);

    statusDiv.textContent = "Model analysis complete.";
    outputPre.innerHTML = buildSummaryHtml(emailData, analysis);
  } catch (error) {
    const isTimeout = error.name === "AbortError";
    statusDiv.textContent = isTimeout
      ? "Backend request timed out."
      : "Analysis failed.";

    outputPre.textContent = isTimeout
      ? "The backend did not respond in time. Make sure backend/app.py is running on http://127.0.0.1:5000."
      : error.message ||
        "Make sure backend/app.py is running on http://127.0.0.1:5000.";
  }
});
