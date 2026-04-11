import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>PhishGuardAI</h3>
          <p className={styles.mission}>
            Empowering users to recognize and combat phishing attacks through education and practical training.
          </p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <ul className={styles.links}>
            <li><Link to="/learn">Learn</Link></li>
            <li><Link to="/training-lab">Training Lab</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/real-cases">Real Cases</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>About</h4>
          <ul className={styles.links}>
            <li><Link to="/about">Project Info</Link></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Resources</h4>
          <ul className={styles.links}>
            <li><a href="#security">Security Tips</a></li>
            <li><a href="#report">Report Phishing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {currentYear} PhishGuardAI. All rights reserved. | Educational Platform for Cybersecurity Awareness</p>
      </div>
    </footer>
  )
}

export default Footer
