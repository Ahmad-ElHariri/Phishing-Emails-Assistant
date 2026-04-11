console.log("PhishGuardAI content script loaded.");

function getDomainFromEmail(email) {
  if (!email || !email.includes("@")) return null;
  return email.split("@")[1].toLowerCase().trim();
}

function getDomainFromUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return null;
  }
}

function getVisibleText(element) {
  return element ? element.innerText.trim() : "";
}

function extractAttachments() {
  const attachments = [];

  // Gmail attachment cards
  const attachmentCards = document.querySelectorAll('div.aQH');

  attachmentCards.forEach((card) => {
    let filename = "";
    let extension = "";
    let size_if_available = null;

    const filenameElement =
      card.querySelector(".aV3") ||
      card.querySelector(".aV3 span") ||
      card.querySelector('[download_url]') ||
      card.querySelector("span");

    if (filenameElement) {
      filename = filenameElement.innerText.trim();
    }

    if (filename && filename.includes(".")) {
      extension = filename.split(".").pop().toLowerCase();
    }

    const sizeElement =
      card.querySelector(".SaH2Ve") ||
      card.querySelector(".aQA") ||
      card.querySelector('[aria-label*="MB"], [aria-label*="KB"]');

    if (sizeElement) {
      size_if_available = sizeElement.innerText.trim() || null;
    }

    if (filename) {
      attachments.push({
        filename,
        extension,
        size_if_available
      });
    }
  });

  return attachments;
}

function extractLinks(bodyElement) {
  if (!bodyElement) return [];

  const linkElements = Array.from(bodyElement.querySelectorAll("a"));

  return linkElements.map((a) => ({
    href: a.href || "",
    visible_text: a.innerText.trim() || a.getAttribute("title") || "",
    is_image_link: !!a.querySelector("img")
  }));
}

function extractEmailData() {
  const mainContainer = document.querySelector("div[role='main']") || document;

  // SUBJECT
  const subjectElement =
    mainContainer.querySelector("h2.hP") ||
    mainContainer.querySelector("h2[data-thread-perm-id]") ||
    mainContainer.querySelector("h2");

  const subject_text = getVisibleText(subjectElement);

  // CURRENT OPEN EMAIL BLOCK
  // Gmail often has multiple email blocks in a thread, so try to target the visible one
  const openMailBlock =
    mainContainer.querySelector("div.adn.ads") ||
    mainContainer.querySelector("div[role='listitem']") ||
    mainContainer;

  // FROM DISPLAY NAME + EMAIL
  const fromElement =
    openMailBlock.querySelector("span.gD[email]") ||
    openMailBlock.querySelector("span[email].gD") ||
    openMailBlock.querySelector("span.gD") ||
    openMailBlock.querySelector("span[email]");

  let from_display_name = "";
  let from_email = "";

  if (fromElement) {
    from_display_name =
      fromElement.getAttribute("name") ||
      fromElement.innerText.trim() ||
      "";

    from_email =
      fromElement.getAttribute("email") ||
      fromElement.getAttribute("data-hovercard-id") ||
      "";
  }

  const from_domain = getDomainFromEmail(from_email);

  // REPLY-TO
  let reply_to_email = null;
  let reply_to_domain = null;

  // Usually not directly available in Gmail DOM unless expanded details are opened
  const replyToElement = openMailBlock.querySelector("[data-reply-to]");

  if (replyToElement) {
    reply_to_email = replyToElement.getAttribute("data-reply-to");
    reply_to_domain = getDomainFromEmail(reply_to_email);
  }

  // BODY
  const bodyElement =
    openMailBlock.querySelector("div.a3s.aiL") ||
    openMailBlock.querySelector("div.a3s") ||
    openMailBlock.querySelector("div[dir='auto']");

  const body_html = bodyElement ? bodyElement.innerHTML : "";
  const body_visible_text = bodyElement ? bodyElement.innerText.trim() : "";

  // LINKS
  const links = extractLinks(bodyElement);

  const link_domains = [
    ...new Set(
      links
        .map((link) => getDomainFromUrl(link.href))
        .filter(Boolean)
    )
  ];

  // ATTACHMENTS
  const attachments = extractAttachments();
  const has_attachments = attachments.length > 0;

  // TO / CC
  // These are often hidden unless message details are expanded, so keep fallback empty for now
  const to_emails = [];
  const cc_emails = [];

  // DATE / TIME
  let sent_datetime = null;
  const timeElement =
    openMailBlock.querySelector("span.g3") ||
    openMailBlock.querySelector("td.gH span");

  if (timeElement) {
    sent_datetime =
      timeElement.getAttribute("title") ||
      timeElement.getAttribute("aria-label") ||
      timeElement.innerText.trim() ||
      null;
  }

  // THREAD / REPLY
  const is_thread_reply = /^re:/i.test(subject_text);

  return {
    subject_text,
    from_display_name,
    from_email,
    from_domain,
    reply_to_email,
    reply_to_domain,
    to_emails,
    to_count: to_emails.length,
    cc_emails,
    cc_count: cc_emails.length,
    sent_datetime,
    is_thread_reply,
    body_html,
    body_visible_text,
    has_attachments,
    attachments,
    links,
    link_domains
  };
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "extract_email") {
    try {
      const data = extractEmailData();
      sendResponse({ success: true, data });
    } catch (error) {
      sendResponse({
        success: false,
        error: error.message || "Unknown extraction error"
      });
    }
  }

  return true;
});