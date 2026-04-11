import React from 'react'
import styles from './Card.module.css'

function Card({ title, description, icon, children, className, onClick, variant = 'default' }) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className || ''}`} onClick={onClick}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
      {children}
    </div>
  )
}

export default Card
