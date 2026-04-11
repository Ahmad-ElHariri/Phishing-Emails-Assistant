import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import { realCases } from '../data/mockData'
import styles from './RealCases.module.css'

function RealCases() {
  const [expandedCase, setExpandedCase] = useState(null)

  const toggleExpand = (id) => {
    setExpandedCase(expandedCase === id ? null : id)
  }

  return (
    <div className={styles.realCases}>
      <section className={styles.introSection}>
        <div className={styles.container}>
          <SectionHeader
            title="Real Phishing Cases"
            subtitle="Learn from documented phishing attacks and understand what makes them convincing"
          />
          <p className={styles.introText}>
            These are real-world phishing attacks (with details changed for privacy). Understanding how attackers operate helps you stay vigilant.
          </p>
        </div>
      </section>

      <section className={styles.casesSection}>
        <div className={styles.container}>
          <div className={styles.casesList}>
            {realCases.map((caseStudy) => (
              <Card
                key={caseStudy.id}
                title={caseStudy.title}
                className={`${styles.caseCard} ${expandedCase === caseStudy.id ? styles.expanded : ''}`}
                onClick={() => toggleExpand(caseStudy.id)}
              >
                <div className={styles.caseHeader}>
                  <span className={styles.impersonated}>
                    <strong>Impersonated:</strong> {caseStudy.impersonatedEntity}
                  </span>
                  <span className={styles.attackType}>
                    {caseStudy.attackStyle}
                  </span>
                </div>

                <p className={styles.preview}>
                  {caseStudy.whatMadeItConvincing}
                </p>

                {expandedCase === caseStudy.id && (
                  <div className={styles.caseDetail}>
                    <div className={styles.detailSection}>
                      <h4>What Made It Convincing</h4>
                      <p>{caseStudy.whatMadeItConvincing}</p>
                    </div>

                    <div className={styles.detailSection}>
                      <h4>⚠️ Warning Indicators</h4>
                      <ul className={styles.indicatorList}>
                        {caseStudy.warningIndicators.map((indicator, idx) => (
                          <li key={idx}>{indicator}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.detailSection}>
                      <h4>💡 Lesson Learned</h4>
                      <p>{caseStudy.lessonLearned}</p>
                    </div>

                    <div className={styles.tags}>
                      {caseStudy.tags.map((tag, idx) => (
                        <span key={idx} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  className={styles.expandBtn}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleExpand(caseStudy.id)
                  }}
                >
                  {expandedCase === caseStudy.id ? '▴ Collapse' : '▾ Read More'}
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.patternsSection}>
        <div className={styles.container}>
          <SectionHeader
            title="Common Attack Patterns"
            subtitle="These patterns appear across multiple real-world phishing attacks"
          />

          <div className={styles.patternsGrid}>
            <Card title="Urgency & Time Pressure" icon="⏱️" variant="warning">
              <p>
                Attackers create artificial deadlines ("Account will be closed in 24 hours") to prevent victims from thinking clearly.
              </p>
            </Card>

            <Card title="Impersonation of Authority" icon="🎭" variant="danger">
              <p>
                Posing as trusted brands, banks, or company executives increases credibility and compliance rates.
              </p>
            </Card>

            <Card title="Technical-Sounding Language" icon="🔧" variant="default">
              <p>
                Using technical jargon and security terminology makes phishing emails seem more legitimate.
              </p>
            </Card>

            <Card title="Personal Information" icon="👤" variant="default">
              <p>
                Using names, job titles, or company details makes spear phishing emails feel personal and targeted.
              </p>
            </Card>

            <Card title="Too Good to Be True" icon="🎁" variant="default">
              <p>
                Offers of free gifts, refunds, or unexpected bonuses attract victims willing to take risks.
              </p>
            </Card>

            <Card title="Fear & Threats" icon="😨" variant="danger">
              <p>
                Threatening account suspension, legal action, or security issues trigger panic and quick decisions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className={styles.protectionSection}>
        <div className={styles.container}>
          <SectionHeader
            title="How to Protect Yourself"
            subtitle="Apply these lessons to your daily email habits"
          />

          <div className={styles.protectionGrid}>
            <div className={styles.protectionCard}>
              <h4>✓ Verify Everything</h4>
              <p>Never trust email links or attachments without verification. Contact the organization directly using a trusted phone number or website.</p>
            </div>

            <div className={styles.protectionCard}>
              <h4>✓ Slow Down</h4>
              <p>Phishing thrives on urgency. Take time to analyze emails, especially those demanding immediate action.</p>
            </div>

            <div className={styles.protectionCard}>
              <h4>✓ Question Authority</h4>
              <p>Even if an email appears to come from someone in authority, verify requests through independent channels before complying.</p>
            </div>

            <div className={styles.protectionCard}>
              <h4>✓ Look for Red Flags</h4>
              <p>Generic greetings, spelling errors, suspicious sender addresses, and threatening language are common phishing indicators.</p>
            </div>

            <div className={styles.protectionCard}>
              <h4>✓ Use Security Tools</h4>
              <p>Enable multi-factor authentication, use strong passwords, keep software updated, and use security extensions.</p>
            </div>

            <div className={styles.protectionCard}>
              <h4>✓ Report Suspicious Emails</h4>
              <p>Forward phishing attempts to your IT department and the impersonated organization's security team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Continue Your Learning Journey</h2>
          <p>Now that you understand real-world attacks, practice your skills in our training lab and take the quiz.</p>
          <div className={styles.ctaButtons}>
            <a href="/training-lab" className={styles.ctaButton}>
              Go to Training Lab
            </a>
            <a href="/quiz" className={`${styles.ctaButton} ${styles.secondary}`}>
              Take the Quiz
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RealCases
