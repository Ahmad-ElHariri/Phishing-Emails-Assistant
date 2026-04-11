import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'
import StatsStrip from '../components/StatsStrip'
import PhishingAnalysisCard from '../components/PhishingAnalysisCard'
import { mockEmails, stats } from '../data/mockData'
import styles from './Home.module.css'

function Home() {
  const examplePhishingEmail = mockEmails[1] // The suspicious PayPal email

  const features = [
    {
      title: 'Web Awareness Platform',
      description: 'Learn phishing indicators, practice on realistic examples, and test your knowledge',
      icon: '📚',
      points: ['Learn common phishing signs', 'Interactive training modules', 'Real-world email examples']
    },
    {
      title: 'Browser Phishing Assistant',
      description: 'Real-time analysis of emails and suspicious links in your browser',
      icon: '🔍',
      points: ['Chrome extension integration', 'Instant email analysis', 'Real-time threat detection']
    }
  ]

  const whyItMatters = [
    {
      title: 'Phishing is the #1 Cyberthreat',
      description: 'Over 90% of data breaches start with phishing attacks targeting human vulnerability',
      icon: '⚠️'
    },
    {
      title: 'Users Need Practical Training',
      description: 'Static warnings are not enough. Users need hands-on experience to recognize threats',
      icon: '🎯'
    },
    {
      title: 'Awareness Improves Defense',
      description: 'Companies with trained employees report 70% fewer successful phishing attempts',
      icon: '🛡️'
    },
    {
      title: 'Everyone is a Target',
      description: 'From students to executives, phishing attacks are targeted and increasingly convincing',
      icon: '👥'
    }
  ]

  const workflowSteps = [
    { number: '1', title: 'Learn', description: 'Understand phishing tactics and how to spot them' },
    { number: '2', title: 'Practice', description: 'Train on realistic phishing email examples' },
    { number: '3', title: 'Analyze', description: 'Test your skills with our interactive quiz' },
    { number: '4', title: 'Protect', description: 'Build safer habits and make better decisions' }
  ]

  return (
    <div className={styles.home}>
      <HeroSection
        title="PhishGuardAI"
        subtitle="AI-Powered Phishing Awareness Platform"
        description="Your personal phishing detection assistant. Learn to recognize phishing attacks, practice on realistic examples, and protect yourself from email threats."
        buttons={[
          { text: 'Start Learning', href: '/learn', variant: 'primary' },
          { text: 'Try Training Lab', href: '/training-lab', variant: 'secondary' }
        ]}
      >
        <div className={styles.heroVisual}>
          <PhishingAnalysisCard email={examplePhishingEmail} />
        </div>
      </HeroSection>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            title="Why Phishing Awareness Matters"
            subtitle="Phishing attacks evolve every day. Here's why education is your strongest defense."
          />
          <div className={styles.whyGrid}>
            {whyItMatters.map((item, idx) => (
              <Card key={idx} title={item.title} description={item.description} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            title="Our Platform Components"
            subtitle="PhishGuardAI includes both web-based training and browser-integrated protection"
          />
          <div className={styles.featuresGrid}>
            {features.map((feature, idx) => (
              <Card key={idx} variant="highlight" className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <ul className={styles.featurePoints}>
                  {feature.points.map((point, pidx) => (
                    <li key={pidx}>✓ {point}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            title="How PhishGuardAI Works"
            subtitle="A simple, effective approach to building your phishing detection skills"
          />
          <div className={styles.workflow}>
            {workflowSteps.map((step, idx) => (
              <div key={idx} className={styles.workflowStep}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDescription}>{step.description}</p>
                {idx < workflowSteps.length - 1 && <div className={styles.arrow}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader title="Real Impact" subtitle="Join thousands learning phishing awareness" />
          <StatsStrip stats={stats} />
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Build Your Phishing Detection Skills?</h2>
            <p>Start with our learning modules or dive straight into the training lab.</p>
            <div className={styles.ctaButtons}>
              <Link to="/learn" className={styles.ctaButton}>
                Begin Learning
              </Link>
              <Link to="/quiz" className={`${styles.ctaButton} ${styles.secondary}`}>
                Take a Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
