import React, { useState } from 'react'
import styles from './EmailCard.module.css'

function EmailCard({ email, onAnalyze }) {
  const [showFull, setShowFull] = useState(false)

  return (
    <div className={`${styles.emailCard} ${email.isPhishing ? styles.phishing : styles.legitimate}`}>
      <div className={styles.header}>
        <p className={styles.from}>
          <span className={styles.label}>From:</span>
          {email.sender}
        </p>
        <span className={`${styles.badge} ${email.isPhishing ? styles.suspicious : styles.safe}`}>
          {email.isPhishing ? '⚠️ Suspicious' : '✓ Legitimate'}
        </span>
      </div>

      <div className={styles.subject}>
        <span className={styles.label}>Subject:</span>
        {email.subject}
      </div>

      <div className={styles.preview}>
        <span className={styles.label}>Preview:</span>
        <p className={styles.previewText}>{email.preview}</p>
      </div>

      <div className={styles.actions}>
        <button onClick={() => onAnalyze(email)} className={styles.analyzeBtn}>
          {showFull ? 'Hide' : 'Analyze'} Email
        </button>
        {email.isPhishing && (
          <button className={styles.cluesBtn} onClick={() => setShowFull(!showFull)}>
            {showFull ? 'Hide' : 'Show'} Clues
          </button>
        )}
      </div>

      {showFull && email.suspiciousElements && (
        <div className={styles.clues}>
          <h4>Suspicious Elements Found:</h4>
          <ul>
            {email.suspiciousElements.map((clue, idx) => (
              <li key={idx}>{clue}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default EmailCard
