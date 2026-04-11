const extractBtn = document.getElementById("extractBtn");
const statusDiv = document.getElementById("status");
const outputPre = document.getElementById("output");

function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function runMockAnalysis(emailData) {
  const reasons = [];
  let score = 0;

  const suspiciousWords = [
    "urgent",
    "verify",
    "password",
    "bank",
    "click here",
    "immediately",
    "account suspended",
    "confirm",
    "payment",
    "invoice"
  ];

  const subject = (emailData.subject_text || "").toLowerCase();
  const body = (emailData.body_visible_text || "").toLowerCase();
  const senderDomain = (emailData.from_domain || "").toLowerCase();

  suspiciousWords.forEach((word) => {
    if (subject.includes(word) || body.includes(word)) {
      reasons.push(`Contains suspicious keyword: "${word}"`);
      score += 15;
    }
  });

  if (emailData.links && emailData.links.length > 0) {
    reasons.push(`Contains ${emailData.links.length} link(s)`);
    score += 10;
  }

  if (emailData.has_attachments) {
    reasons.push("Contains attachment");
    score += 10;
  }

  if (
    senderDomain &&
    !senderDomain.endsWith("gmail.com") &&
    !senderDomain.endsWith("google.com") &&
    !senderDomain.endsWith("kaust.edu.sa") &&
    !senderDomain.endsWith("outlook.com") &&
    !senderDomain.endsWith("microsoft.com")
  ) {
    reasons.push(`Unfamiliar sender domain: ${senderDomain}`);
    score += 20;
  }

  if (score > 100) score = 100;

  let label = "Safe";
  if (score >= 60) {
    label = "Phishing";
  } else if (score >= 30) {
    label = "Suspicious";
  }

  if (reasons.length === 0) {
    reasons.push("No obvious phishing indicators found by mock analysis");
  }

  return { label, score, reasons };
}

function buildSummaryHtml(emailData, analysis) {
  const sender = escapeHtml(emailData.from_email || "Not found");
  const senderName = escapeHtml(emailData.from_display_name || "Not found");
  const subject = escapeHtml(emailData.subject_text || "Not found");
  const domain = escapeHtml(emailData.from_domain || "Not found");
  const sentDate = escapeHtml(emailData.sent_datetime || "Not found");
  const attachmentText = emailData.has_attachments ? "Yes" : "No";

  const badgeColor =
    analysis.label === "Phishing"
      ? "#d93025"
      : analysis.label === "Suspicious"
      ? "#f9ab00"
      : "#188038";

  const reasonsHtml = analysis.reasons
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
        ${escapeHtml(analysis.label)} (${analysis.score}/100)
      </div>

      <div><strong>Subject:</strong> ${subject}</div>
      <div><strong>Sender Name:</strong> ${senderName}</div>
      <div><strong>Sender Email:</strong> ${sender}</div>
      <div><strong>Sender Domain:</strong> ${domain}</div>
      <div><strong>Date:</strong> ${sentDate}</div>
      <div><strong>Attachments:</strong> ${attachmentText}</div>
      <div><strong>Links Found:</strong> ${emailData.links ? emailData.links.length : 0}</div>

      <div style="margin-top: 12px;"><strong>Reasons:</strong></div>
      <ul style="margin-top: 6px; padding-left: 18px;">
        ${reasonsHtml}
      </ul>
    </div>
  `;
}

extractBtn.addEventListener("click", async () => {
  statusDiv.textContent = "Extracting email...";
  outputPre.textContent = "";

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab || !tab.id) {
      statusDiv.textContent = "No active tab found.";
      return;
    }

    chrome.tabs.sendMessage(tab.id, { action: "extract_email" }, (response) => {
      if (chrome.runtime.lastError) {
        statusDiv.textContent = "Could not connect to Gmail page.";
        outputPre.textContent = chrome.runtime.lastError.message;
        return;
      }

      if (!response) {
        statusDiv.textContent = "No response received.";
        return;
      }

      if (!response.success) {
        statusDiv.textContent = "Extraction failed.";
        outputPre.textContent = response.error || "Unknown error";
        return;
      }

      const emailData = response.data;
      const analysis = runMockAnalysis(emailData);

      statusDiv.textContent = "Mock analysis complete.";
      outputPre.innerHTML = buildSummaryHtml(emailData, analysis);
    });
  } catch (error) {
    statusDiv.textContent = "Unexpected error.";
    outputPre.textContent = error.message;
  }
});