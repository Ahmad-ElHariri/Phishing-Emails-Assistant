import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import EmailCard from '../components/EmailCard'
import { mockEmails } from '../data/mockData'
import styles from './TrainingLab.module.css'

function TrainingLab() {
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [showAnalysis, setShowAnalysis] = useState(false)

  const handleAnalyze = (email) => {
    setSelectedEmail(email)
    setShowAnalysis(true)
  }

  const handleClose = () => {
    setSelectedEmail(null)
    setShowAnalysis(false)
  }

  return (
    <div className={styles.trainingLab}>
      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <SectionHeader
            title="Training Lab"
            subtitle="Analyze realistic phishing emails and learn from each example"
          />
          <p className={styles.introText}>
            Click "Analyze Email" on any email below to reveal suspicious elements and learn why it is (or isn't) a phishing attempt. Take your time and make your best guess before revealing the answer.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.labSection}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* Left: Email List */}
            <div className={styles.emailList}>
              <h3 className={styles.listTitle}>Sample Emails</h3>
              <div className={styles.emailCards}>
                {mockEmails.map((email) => (
                  <EmailCard
                    key={email.id}
                    email={email}
                    onAnalyze={handleAnalyze}
                  />
                ))}
              </div>
            </div>

            {/* Right: Analysis Panel */}
            <div className={styles.analysisPanel}>
              {selectedEmail && showAnalysis ? (
                <div className={styles.analysis}>
                  <button className={styles.closeBtn} onClick={handleClose}>✕</button>

                  <h3 className={styles.analysisTitle}>Email Analysis</h3>

                  <div className={styles.analysisContent}>
                    <div className={styles.analysisField}>
                      <label>From:</label>
                      <p className={styles.senderValue}>{selectedEmail.sender}</p>
                    </div>

                    <div className={styles.analysisField}>
                      <label>Subject:</label>
                      <p>{selectedEmail.subject}</p>
                    </div>

                    <div className={styles.riskIndicator}>
                      <label>Risk Level:</label>
                      <div className={styles.riskBar}>
                        <div
                          className={styles.riskFill}
                          style={{
                            width: `${selectedEmail.riskScore}%`,
                            background: selectedEmail.riskScore > 70
                              ? '#ef4444'
                              : selectedEmail.riskScore > 40
                              ? '#f59e0b'
                              : '#10b981'
                          }}
                        ></div>
                      </div>
                      <p className={styles.riskScore}>{selectedEmail.riskScore}% Risk</p>
                    </div>

                    {selectedEmail.suspiciousElements && selectedEmail.suspiciousElements.length > 0 ? (
                      <div className={styles.elementsSection}>
                        <label>⚠️ Suspicious Elements:</label>
                        <ul className={styles.elementsList}>
                          {selectedEmail.suspiciousElements.map((element, idx) => (
                            <li key={idx}>
                              <span className={styles.warning}>!</span>
                              {element}
                            </li>
                          ))}
                        </ul>
                        <div className={styles.verdict}>
                          <strong>This is likely a phishing email.</strong> Do not click links, download attachments, or provide personal information.
                        </div>
                      </div>
                    ) : (
                      <div className={styles.safeSection}>
                        <label>✓ Legitimate Email</label>
                        <p className={styles.safeExplanation}>
                          {selectedEmail.safeExplanation}
                        </p>
                        <div className={styles.verdict} style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '3px solid var(--safe)' }}>
                          <strong>This email appears to be legitimate.</strong> It's safe to interact with, but always remain cautious.
                        </div>
                      </div>
                    )}

                    <div className={styles.tips}>
                      <h4>💡 Key Takeaway:</h4>
                      {selectedEmail.isPhishing ? (
                        <p>
                          This email uses common phishing tactics: {selectedEmail.suspiciousElements.slice(0, 2).join(', ').toLowerCase()}. Remember to verify sender addresses, check for urgency language, and never click suspicious links.
                        </p>
                      ) : (
                        <p>
                          Legitimate emails usually come from verified domains, use personalized content, and don't create artificial urgency. When in doubt, verify through official channels.
                        </p>
                      )}
                    </div>
                  </div>

                  <button className={styles.analyzeAgainBtn} onClick={handleClose}>
                    Analyze Another Email
                  </button>
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}>📧</div>
                  <h4>Select an email to analyze</h4>
                  <p>Click "Analyze Email" on any of the sample emails to the left to see a detailed analysis and learn about phishing indicators.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className={styles.tipsSection}>
        <div className={styles.container}>
          <SectionHeader
            title="Training Tips"
            subtitle="Got these right? Here's what to do next"
          />
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>✓</div>
              <h4>Confident in your skills?</h4>
              <p>Take our quiz to test your phishing detection abilities and get a score.</p>
              <a href="/quiz" className={styles.tipLink}>Go to Quiz →</a>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>🔄</div>
              <h4>Want more practice?</h4>
              <p>Re-analyze the same emails using the questions: Is this phishing? What are the red flags?</p>
              <p className={styles.tipSmall}>Repetition builds muscle memory for recognizing threats.</p>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>🎯</div>
              <h4>Ready to go deeper?</h4>
              <p>Check out our Real Cases section to see how actual phishing attacks target organizations and individuals.</p>
              <a href="/real-cases" className={styles.tipLink}>View Real Cases →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrainingLab
