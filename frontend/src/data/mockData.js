// Mock data for PhishGuardAI application

export const mockEmails = [
  {
    id: 1,
    sender: 'noreply@university.edu',
    subject: 'Your course materials have been uploaded to the portal',
    preview: 'Hello,\n\nYour professor has uploaded the latest course materials to the university portal. You can access them...',
    body: 'Hello,\n\nYour professor has uploaded the latest course materials to the university portal. You can access them using your student credentials.\n\nThis is a routine notification.\n\nBest regards,\nUniversity Learning Management System',
    isPhishing: false,
    riskScore: 8,
    suspiciousElements: [],
    safeExplanation: 'This email is from the legitimate university domain (.edu), uses standard language, does not create artificial urgency, and does not ask for credentials or attachments.'
  },
  {
    id: 2,
    sender: 'security@paypa1.com',
    subject: 'URGENT: Verify Your Account Immediately',
    preview: 'Dear PayPal User,\n\nUnusual activity detected on your account. Please verify your information immediately...',
    body: 'Dear PayPal User,\n\nUnusual activity has been detected on your account from an unfamiliar location. Please click the link below to verify your identity immediately:\n\n[Click Here to Verify]\n\nIf you do not respond within 2 hours, your account will be suspended.',
    isPhishing: true,
    riskScore: 95,
    suspiciousElements: [
      'Sender domain is "paypa1.com" not "paypal.com" - character substitution (phishing)',
      'Uses urgent language and artificial deadline',
      'Requests credential verification through link',
      'Generic greeting "Dear PayPal User"',
      'Threat of account suspension'
    ],
    safeExplanation: null
  },
  {
    id: 3,
    sender: 'noreply@amazon.com',
    subject: 'Your package delivery has been delayed',
    preview: 'We encountered an issue with your recent order. Please confirm your delivery address...',
    body: 'Your package delivery has been delayed due to address verification issues.\n\nPlease confirm your address and payment method here: [Link]\n\nTo avoid further delays, complete this within 24 hours.',
    isPhishing: true,
    riskScore: 88,
    suspiciousElements: [
      'Creates urgency with 24-hour deadline',
      'Requests confirmation of sensitive information',
      'Generic greeting without order details',
      'Link could redirect to credential harvesting site'
    ],
    safeExplanation: null
  },
  {
    id: 4,
    sender: 'hr@company.com',
    subject: 'Updated Benefits Information - Review Required',
    preview: 'Please review the attached updated benefits documentation for 2024...',
    body: 'Please review the attached updated benefits documentation for 2024. Open the attachment and follow the instructions to confirm your enrollment.\n\nThis is a routine annual update.\n\nHuman Resources Department',
    isPhishing: true,
    riskScore: 72,
    suspiciousElements: [
      'Unexpected attachment from HR',
      'Could contain macro-enabled malware',
      'Vague "follow the instructions" language',
      'Seems routine but attachment could be malicious'
    ],
    safeExplanation: null
  },
  {
    id: 5,
    sender: 'deliveries@fedex.com',
    subject: 'Your FedEx shipment is ready for pickup',
    preview: 'Your package is waiting at the FedEx location. Click here to schedule...',
    body: 'Your FedEx shipment is ready for pickup!\n\nClick the button below to schedule your pickup time:\n\n[Schedule Pickup]\n\nYour tracking number: FDX-2024-889234',
    isPhishing: true,
    riskScore: 85,
    suspiciousElements: [
      'Unsolicited shipping notification',
      'Sender domain could be spoofed (often fedex-delivery.com or similar)',
      'Generic greeting without personalization',
      'Tracking number not visible in preview link'
    ],
    safeExplanation: null
  }
]

export const phishingSigns = [
  {
    id: 1,
    title: 'Suspicious Sender Address',
    description: 'The sender email address looks similar to a trusted company but with slight variations.',
    example: 'paypa1.com instead of paypal.com, or amazon-secure@domains.tk instead of amazon.com'
  },
  {
    id: 2,
    title: 'Urgent Language & Threats',
    description: 'The email creates artificial urgency or threatens consequences if you do not act immediately.',
    example: 'Your account will be closed in 24 hours, Urgent action required, Suspicious activity detected'
  },
  {
    id: 3,
    title: 'Fake Login Requests',
    description: 'The email asks you to click a link and re-enter your credentials or sensitive information.',
    example: 'Verify your account, Confirm your password, Update your billing information'
  },
  {
    id: 4,
    title: 'Mismatched Links',
    description: 'The visible text of a link does not match the actual URL it leads to.',
    example: 'Text says "Click here" but the URL points to a suspicious domain'
  },
  {
    id: 5,
    title: 'Unexpected Attachments',
    description: 'The email comes from an unknown sender or contains unexpected file attachments.',
    example: '.exe, .scr, macro-enabled .xls files from unknown sources'
  },
  {
    id: 6,
    title: 'Grammar & Spelling Errors',
    description: 'Professional companies proofread their emails. Poor grammar is a red flag.',
    example: 'Plese clik hear, Your accoun has ben compromized'
  },
  {
    id: 7,
    title: 'Impersonation of Trusted Brands',
    description: 'The email impersonates a well-known company, bank, or service to gain trust.',
    example: 'Fake Apple, Microsoft, Google, or Bank emails'
  },
  {
    id: 8,
    title: 'Pressure for Payment or Account Info',
    description: 'The email pressures you to provide payment details, passwords, or personal information.',
    example: 'Update your card, Verify your SSN, Confirm your banking details'
  }
]

export const phishingTypes = [
  {
    id: 1,
    title: 'Email Phishing',
    description: 'The most common type. Attackers send mass emails impersonating legitimate companies to steal credentials or spread malware.',
    examples: ['Fake bank login prompts', 'Fake payment notifications', 'Fake account security alerts']
  },
  {
    id: 2,
    title: 'Spear Phishing',
    description: 'Targeted phishing attacks directed at specific individuals or organizations. Uses personal information to appear more legitimate.',
    examples: ['Personalized emails mentioning your name and role', 'References to your company or projects', 'Emails from fake executive accounts']
  },
  {
    id: 3,
    title: 'Business Email Compromise (BEC)',
    description: 'Attackers compromise or impersonate business email accounts to trick employees into transferring money or sensitive data.',
    examples: ['Fake CEO requesting urgent payment', 'Fake HR requesting employee W-2 data', 'Faked vendor payment requests']
  },
  {
    id: 4,
    title: 'Whaling (CEO Fraud)',
    description: 'Advanced phishing targeting high-level executives to access confidential information or authorize large transactions.',
    examples: ['Fake requests from board members', 'Spoofed executive emails requesting immediate action']
  },
  {
    id: 5,
    title: 'Clone Phishing',
    description: 'Attackers duplicate a legitimate email and replace links/attachments with malicious ones, making it appear the email was resent.',
    examples: ['Fake "resend" of previous legitimate emails with modified links']
  }
]

export const quizQuestions = [
  {
    id: 1,
    question: 'You receive an email from "support@paypa1.com" asking you to verify your account. What should you do?',
    options: [
      { text: 'Click the link immediately and verify your account', correct: false },
      { text: 'Ignore it, as paypa1.com is not a legitimate domain', correct: true },
      { text: 'Reply with your password to confirm it is really PayPal', correct: false },
      { text: 'Download the attachment to see what it is', correct: false }
    ],
    explanation: 'PayPal\'s domain is paypal.com, not paypa1.com. This is a classic character substitution phishing technique. Never click links in unsolicited emails; instead, go directly to the company\'s website.'
  },
  {
    id: 2,
    question: 'An email says "Your account will be closed in 2 hours if you do not verify your information." This is an example of:',
    options: [
      { text: 'A legitimate urgent business matter', correct: false },
      { text: 'Urgency manipulation, a common phishing tactic', correct: true },
      { text: 'Standard customer service follow-up', correct: false },
      { text: 'A security best practice', correct: false }
    ],
    explanation: 'Artificial urgency and threats are classic phishing tactics. Legitimate companies rarely threaten to close your account with extreme time pressure. When in doubt, contact the company directly using a trusted phone number or website.'
  },
  {
    id: 3,
    question: 'When you hover over a link in an email, it shows a different URL than the linked text. What does this indicate?',
    options: [
      { text: 'It is definitely safe', correct: false },
      { text: 'It is likely a phishing attempt', correct: true },
      { text: 'It is a technical glitch with no security implications', correct: false },
      { text: 'You should click it to investigate', correct: false }
    ],
    explanation: 'When the visible text of a link does not match the actual URL, it is a major red flag. This mismatch is often used to disguise malicious links that lead to credential harvesting sites.'
  },
  {
    id: 4,
    question: 'You receive an email with an attachment from an unknown sender. The subject is "Updated Invoice.xlsx". What should you do?',
    options: [
      { text: 'Open the attachment immediately to review the invoice', correct: false },
      { text: 'Do not open it; attachments from unknown senders could contain malware', correct: true },
      { text: 'Download it, but do not enable macros', correct: false },
      { text: 'Forward it to your IT department first', correct: false }
    ],
    explanation: 'Unsolicited attachments from unknown senders are a primary malware delivery method. Never open attachments unless you are certain of the source. When in doubt, verify the sender through an independent channel before opening anything.'
  },
  {
    id: 5,
    question: 'A professional-looking email from your bank asks you to click a link to confirm recent account activity. How can you verify if this is legitimate?',
    options: [
      { text: 'Click the link and enter your information', correct: false },
      { text: 'Call your bank using the phone number on the back of your card or their official website', correct: true },
      { text: 'Reply to the email asking them to confirm', correct: false },
      { text: 'Check your account through the email link provided', correct: false }
    ],
    explanation: 'Always verify suspicious communications by contacting the organization directly using a trusted phone number or their official website. This is the safest way to confirm if a message is legitimate.'
  },
  {
    id: 6,
    question: 'What is the primary indicator that an email asking for your credentials might be phishing?',
    options: [
      { text: 'Legitimate companies never ask for credentials via email', correct: true },
      { text: 'Only scammers use email', correct: false },
      { text: 'The email contains many spelling errors', correct: false },
      { text: 'The sender\'s domain is longer than 5 characters', correct: false }
    ],
    explanation: 'Legitimate organizations almost never ask for passwords or credentials via email. If you receive such a request, it is almost certainly phishing. Legitimate companies verify your identity through secure channels, not email links.'
  },
  {
    id: 7,
    question: 'An email from "HR@company.com" contains an attachment called "2024 Benefits Update.exe". What is suspicious about this?',
    options: [
      { text: 'Nothing is suspicious; .exe files are normal', correct: false },
      { text: '.exe files are executable programs and pose a malware risk; benefits updates should be PDFs or documents', correct: true },
      { text: 'The subject line sounds legitimate', correct: false },
      { text: 'HR never sends emails', correct: false }
    ],
    explanation: 'Unexpected .exe (executable) files are major red flags. Phishers use executable attachments to deliver malware. Legitimate benefits documents are sent as PDFs or Word documents. Be suspicious of any unexpected .exe file, especially from HR.'
  },
  {
    id: 8,
    question: 'You receive an email that says "Re: Your Recent Order" but you do not remember placing an order. What should you do?',
    options: [
      { text: 'Click the link to check your order history', correct: false },
      { text: 'Do not click the link; verify your order by logging into the account separately', correct: true },
      { text: 'Ignore the email completely', correct: false },
      { text: 'Reply asking for details about the order', correct: false }
    ],
    explanation: 'Phishers often send fake "order confirmation" or "package delivery" emails. If you did not place an order, do not click any links. Always log into your account through the official website or app, not through email links.'
  }
]

export const realCases = [
  {
    id: 1,
    title: 'Fake Microsoft Password Reset',
    impersonatedEntity: 'Microsoft',
    attackStyle: 'Mass credential harvesting',
    whatMadeItConvincing: 'Exact replica of Microsoft\'s branding, professional design, immediate credential verification request',
    warningIndicators: [
      'Domain was microsoft-verify.tk instead of microsoft.com',
      'Generic greeting "Dear User" instead of personalized',
      'Extreme urgency claiming account would be deleted',
      'Link did not match displayed text'
    ],
    lessonLearned: 'Always navigate to official websites directly. Never click links from emails requesting password changes.',
    tags: ['urgency', 'impersonation', 'credential theft']
  },
  {
    id: 2,
    title: 'Fake University Financial Services Payment',
    impersonatedEntity: 'University Finance Department',
    attackStyle: 'Targeted spear phishing to students',
    whatMakeItConvincing: 'Addressed to individual students by name, referenced real course codes, used university domain similar to official',
    warningIndicators: [
      'Sender was finance@university-pay.net instead of official domain',
      'Requested payment for "outstanding fees" without prior notice',
      'Link requested uploading student ID and credit card photos',
      'Legitimate notices typically arrive through student portal, not email'
    ],
    lessonLearned: 'Universities use secure portals for financial matters. Never upload personal documents or financial info via email links.',
    tags: ['impersonation', 'credential theft', 'payment fraud']
  },
  {
    id: 3,
    title: 'FedEx Delivery Notification Scam',
    impersonatedEntity: 'FedEx',
    attackStyle: 'Malware distribution via fake delivery notice',
    whatMadeItConvincing: 'Looked exactly like official FedEx notification, included fake tracking numbers, urgent language about package delivery',
    warningIndicators: [
      'Domain was fedex-delivery.info instead of fedex.com',
      'Attachment was .scr file (screensaver) which could run as executable',
      'Did not match any actual packages being delivered',
      'Requested clicking to "reschedule delivery"'
    ],
    lessonLearned: 'Be cautious with unsolicited package delivery notifications. Verify by visiting the carrier\'s official website directly.',
    tags: ['malicious attachment', 'impersonation', 'urgency']
  },
  {
    id: 4,
    title: 'CEO Impersonation / BEC Attack',
    impersonatedEntity: 'Company Executive',
    attackStyle: 'Business email compromise targeting finance team',
    whatMakeItConvincing: 'Sender address was nearly identical to real CEO (ceo@companyname.co instead of ceo@companyname.com), urgent tone matching CEO\'s style',
    warningIndicators: [
      'Subtle domain variation (.co vs .com)',
      'Requested urgent wire transfer to vendor account',
      'Pressured employee to keep it confidential',
      'CEO would typically not email urgent financial requests this way'
    ],
    lessonLearned: 'Always verify unusual financial requests through a separate communication channel (phone, in-person) before processing.',
    tags: ['impersonation', 'urgency', 'invoice fraud']
  },
  {
    id: 5,
    title: 'Tax Authority Refund Scam',
    impersonatedEntity: 'Tax Authority (IRS/HMRC)',
    attackStyle: 'Mass phishing for personal financial information',
    whatMakeItConvincing: 'Used official agency branding, referenced tax refunds (enticing bait), included tax-specific language, professional layout',
    warningIndicators: [
      'Tax authorities never initiate contact via email for refunds',
      'Requested personal tax information and banking details',
      'Urgent language about expiring refunds',
      'Link went to credential harvesting site'
    ],
    lessonLearned: 'Government agencies do not initiate contact via email. Always log into your official tax portal separately.',
    tags: ['impersonation', 'credential theft', 'payment fraud']
  }
]

export const teamMembers = [
  {
    id: 1,
    name: 'Fadi',
    role: 'Frontend Development & Chrome Extension',
    responsibilities: 'UI/UX design and implementation, browser extension development'
  },
  {
    id: 2,
    name: 'Ahmad',
    role: 'Feature Engineering & ML',
    responsibilities: 'Machine learning model development, phishing pattern recognition'
  },
  {
    id: 3,
    name: 'Ali',
    role: 'Datasets & Data Processing',
    responsibilities: 'Dataset curation, data cleaning and preparation for model training'
  },
  {
    id: 4,
    name: 'Team',
    role: 'Backend API & Deployment',
    responsibilities: 'API development, cloud infrastructure, deployment and scaling'
  }
]

export const stats = [
  { number: '1M+', label: 'Emails Analyzed' },
  { number: '50K+', label: 'Exercises Completed' },
  { number: '200+', label: 'Phishing Patterns Covered' },
  { number: '75%', label: 'Awareness Score Improvement' }
]

export const bestPractices = [
  { title: 'Enable Multi-Factor Authentication (MFA)', description: 'Adds a second layer of security even if your password is compromised.' },
  { title: 'Use Strong, Unique Passwords', description: 'Create passwords with a mix of characters. Use a password manager to keep track of them.' },
  { title: 'Never Click Links in Suspicious Emails', description: 'Navigate to websites directly or search for official contact information.' },
  { title: 'Verify Requests Independently', description: 'Call the company using a trusted phone number before confirming sensitive information.' },
  { title: 'Do Not Download Unexpected Attachments', description: 'Scan files with antivirus before opening, or ask IT to verify first.' },
  { title: 'Keep Software Updated', description: 'Install security patches and updates for your OS and applications regularly.' },
  { title: 'Report Suspicious Emails', description: 'Forward phishing attempts to your IT department or the company being impersonated.' },
  { title: 'Think Before You Click', description: 'Take a moment to verify before acting on urgent requests or offers that seem too good to be true.' }
]

export const sampleQuizzes = [
  {
    id: 1,
    title: 'Phishing Recognition 101',
    description: 'Test your ability to identify common phishing indicators',
    difficulty: 'Beginner',
    questionCount: 5
  },
  {
    id: 2,
    title: 'Advanced Threat Detection',
    description: 'Challenge yourself with sophisticated phishing scenarios',
    difficulty: 'Advanced',
    questionCount: 8
  }
]
