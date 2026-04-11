import React from 'react'
import styles from './RiskBadge.module.css'

function RiskBadge({ riskScore, size = 'md' }) {
  let severity = 'low'
  let label = 'Low Risk'

  if (riskScore >= 70) {
    severity = 'critical'
    label = 'Critical'
  } else if (riskScore >= 50) {
    severity = 'high'
    label = 'High Risk'
  } else if (riskScore >= 25) {
    severity = 'medium'
    label = 'Medium Risk'
  }

  return (
    <div className={`${styles.badge} ${styles[severity]} ${styles[size]}`}>
      <span className={styles.label}>{label}</span>
      <span className={styles.score}>{riskScore}</span>
    </div>
  )
}

export default RiskBadge
