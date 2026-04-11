import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import { phishingSigns, phishingTypes, bestPractices } from '../data/mockData'
import styles from './Learn.module.css'

function Learn() {
  return (
    <div className={styles.learn}>
      {/* Intro Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            title="What is Phishing?"
            subtitle="Learn how attackers deceive users and why they're successful"
          />
          <div className={styles.introContent}>
            <div className={styles.introCard}>
              <h3>Definition</h3>
              <p>
                Phishing is a cyberattack where attackers impersonate trusted entities (banks, companies, services) through email, text, or websites to trick users into revealing sensitive information like passwords, credit card numbers, or personal data.
              </p>
            </div>
            <div className={styles.introCard}>
              <h3>Why Attackers Use Phishing</h3>
              <p>
                Phishing is cost-effective and highly successful. Attackers exploit human psychology rather than technical vulnerabilities. One successful email can result in compromised accounts, stolen data, malware infections, or financial fraud.
              </p>
            </div>
            <div className={styles.introCard}>
              <h3>Why People Fall For It</h3>
              <p>
                Modern phishing emails are incredibly convincing. They use urgency tactics, mimic official designs, and target specific victims with personalized information. Even security-conscious users can make mistakes when rushed or tired.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phishing Signs */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            title="Common Phishing Signs"
            subtitle="Learn to identify red flags in suspicious emails"
          />
          <div className={styles.signsGrid}>
            {phishingSigns.map((sign, idx) => (
              <Card key={idx} title={sign.title} variant="default" className={styles.signCard}>
                <p className={styles.description}>{sign.description}</p>
                <div className={styles.example}>
                  <span className={styles.exampleLabel}>Example:</span>
                  <p>{sign.example}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Phishing */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            title="Types of Phishing Attacks"
            subtitle="Attackers use different tactics for different targets"
          />
          <div className={styles.typesGrid}>
            {phishingTypes.map((type, idx) => (
              <Card key={idx} title={type.title} variant="default" className={styles.typeCard}>
                <p className={styles.description}>{type.description}</p>
                <div className={styles.examples}>
                  <p className={styles.exampleLabel}>Common examples:</p>
                  <ul>
                    {type.examples.map((example, eidx) => (
                      <li key={eidx}>{example}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Inspect an Email */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            title="How to Safely Inspect an Email"
            subtitle="Step-by-step guide to verify if an email is legitimate"
          />
          <div className={styles.inspectionSteps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <h4>Check the Sender Carefully</h4>
              <p>Look at the full email address, not just the display name. Scammers often use addresses that look similar to real ones but with slight variations like "paypa1.com" instead of "paypal.com".</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <h4>Hover Over Links (Don't Click)</h4>
              <p>Move your mouse over links to see where they actually point to. The URL should match the text shown. If it's different, it's likely a phishing attempt.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <h4>Don't Rush</h4>
              <p>Phishing emails create urgency ("Act now!", "Only 2 hours left"). Legitimate companies give you time to respond. Take a moment to verify before taking any action.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <h4>Verify Through Independent Channels</h4>
              <p>If the email claims to be from your bank or service provider, don't use the link in the email. Instead, go directly to the official website or call the phone number on the back of your card.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>5</span>
              <h4>Be Cautious About Attachments</h4>
              <p>Never download or open attachments from unknown senders. Be especially suspicious of .exe, .scr, and Office files with macro warnings. When in doubt, ask IT to verify it first.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>6</span>
              <h4>Look for Poor Grammar</h4>
              <p>Professional companies proofread their emails. Grammar errors, awkward phrasing, or inconsistent formatting are common signs of phishing attempts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            title="Best Practices for Email Safety"
            subtitle="Protect yourself from phishing attacks"
          />
          <div className={styles.bestPracticesGrid}>
            {bestPractices.map((practice, idx) => (
              <div key={idx} className={styles.practiceCard}>
                <div className={styles.practiceNumber}>{idx + 1}</div>
                <h4>{practice.title}</h4>
                <p>{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to Test Your Knowledge?</h2>
          <p>Now that you understand phishing, practice identifying suspicious emails in our training lab.</p>
          <div className={styles.ctaButtons}>
            <a href="/training-lab" className={styles.ctaButton}>
              Go to Training Lab
            </a>
            <a href="/quiz" className={`${styles.ctaButton} ${styles.secondary}`}>
              Take a Quiz
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Learn
