import React from 'react'
import styles from './Button.module.css'

function Button({ text, onClick, variant = 'primary', size = 'md', fullWidth = false, disabled = false, href, className = '' }) {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {text}
      </a>
    )
  }

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
