import React from 'react'
import styles from './SectionHeader.module.css'

function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <div className={`${styles.header} ${centered ? styles.centered : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

export default SectionHeader
