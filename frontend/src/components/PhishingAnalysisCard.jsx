import React from 'react'
import RiskBadge from './RiskBadge'
import styles from './PhishingAnalysisCard.module.css'

function PhishingAnalysisCard({ email, onAnalyze }) {
  return (
    <div className={styles.analysisCard}>
      <div className={styles.header}>
        <div>
          <p className={styles.label}>From:</p>
          <p className={styles.sender}>{email.sender}</p>
        </div>
        <RiskBadge riskScore={email.riskScore} />
      </div>

      <div className={styles.divider}></div>

      <div className={styles.subject}>
        <p className={styles.label}>Subject:</p>
        <p className={styles.subjectText}>{email.subject}</p>
      </div>

      <div className={styles.body}>
        <p className={styles.label}>Preview:</p>
        <p className={styles.preview}>{email.preview}</p>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.analysis}>
        <p className={styles.label}>Analysis:</p>
        {email.suspiciousElements && email.suspiciousElements.length > 0 ? (
          <ul className={styles.elements}>
            {email.suspiciousElements.slice(0, 3).map((element, idx) => (
              <li key={idx}>
                <span className={styles.indicator}>⚠️</span>
                {element}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.safe}>✓ This email appears to be legitimate</p>
        )}
      </div>

      {onAnalyze && (
        <button className={styles.analyzeButton} onClick={onAnalyze}>
          View Full Analysis →
        </button>
      )}
    </div>
  )
}

export default PhishingAnalysisCard
