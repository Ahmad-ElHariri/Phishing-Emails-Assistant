import React from 'react'
import styles from './StatsStrip.module.css'

function StatsStrip({ stats }) {
  return (
    <div className={styles.statsStrip}>
      {stats.map((stat, idx) => (
        <div key={idx} className={styles.stat}>
          <p className={styles.number}>{stat.number}</p>
          <p className={styles.label}>{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default StatsStrip
