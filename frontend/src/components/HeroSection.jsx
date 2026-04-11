import React from 'react'
import styles from './HeroSection.module.css'

function HeroSection({ title, subtitle, description, buttons, children }) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {description && <p className={styles.description}>{description}</p>}
          {buttons && (
            <div className={styles.buttons}>
              {buttons.map((btn, idx) => (
                <a key={idx} href={btn.href} className={`${styles.button} ${btn.variant === 'secondary' ? styles.secondary : ''}`}>
                  {btn.text}
                </a>
              ))}
            </div>
          )}
        </div>
        {children && <div className={styles.visual}>{children}</div>}
      </div>
    </section>
  )
}

export default HeroSection
