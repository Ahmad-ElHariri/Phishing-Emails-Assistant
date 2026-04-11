import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>⚡</span>
          PhishGuardAI
        </Link>

        <button 
          className={styles.menuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.active : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/learn">Learn</Link></li>
          <li><Link to="/training-lab">Training Lab</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/real-cases">Real Cases</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <Link to="/training-lab" className={styles.ctaButton}>
          Get Started
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
