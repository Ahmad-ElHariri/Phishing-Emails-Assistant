import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import { teamMembers } from '../data/mockData'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.about}>
      {/* Mission Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <SectionHeader
            title="About PhishGuardAI"
            subtitle="An educational platform for phishing awareness and detection"
          />
        </div>
      </section>

      {/* Mission & Problem Statement */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <Card title="Our Mission" icon="🎯">
              <p>
                To empower users with the knowledge and practical skills needed to recognize, analyze, and defend against phishing attacks. We believe that education is the most effective defense against social engineering.
              </p>
            </Card>

            <Card title="The Problem" icon="⚠️">
              <p>
                Phishing remains the #1 vector for data breaches and cyber attacks. Despite widespread awareness efforts, millions of people fall victim every year because static education is not enough. Users need practical, hands-on training.
              </p>
            </Card>

            <Card title="Our Solution" icon="💡">
              <p>
                PhishGuardAI combines interactive learning, realistic examples, practical training labs, and AI-powered analysis to create an engaging, effective phishing awareness platform that users actually want to use.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            title="What PhishGuardAI Includes"
            subtitle="A complete platform for phishing education and training"
          />

          <div className={styles.offersGrid}>
            <div className={styles.offerCard}>
              <div className={styles.offerNumber}>1</div>
              <h4>Learning Platform</h4>
              <p>
                Comprehensive educational modules covering phishing tactics, common signs, and best practices. Designed for both technical and non-technical users.
              </p>
              <ul>
                <li>What is phishing and how it works</li>
                <li>8 common phishing indicators</li>
                <li>Different types of phishing attacks</li>
                <li>How to inspect emails safely</li>
                <li>Best practices for email security</li>
              </ul>
            </div>

            <div className={styles.offerCard}>
              <div className={styles.offerNumber}>2</div>
              <h4>Interactive Training Lab</h4>
              <p>
                Practice analyzing realistic phishing emails. Our training lab presents emails you can interact with to develop muscle memory for threat recognition.
              </p>
              <ul>
                <li>Realistic email examples</li>
                <li>Reveal suspicious elements on demand</li>
                <li>Learn from both phishing and legitimate emails</li>
                <li>Immediate feedback and explanations</li>
              </ul>
            </div>

            <div className={styles.offerCard}>
              <div className={styles.offerNumber}>3</div>
              <h4>Phishing Quiz</h4>
              <p>
                Test your knowledge with our interactive 8-question quiz. Get immediate feedback, detailed explanations, and personalized recommendations.
              </p>
              <ul>
                <li>8 carefully crafted questions</li>
                <li>Immediate explanations for each answer</li>
                <li>Score calculation and feedback</li>
                <li>Progress tracking</li>
              </ul>
            </div>

            <div className={styles.offerCard}>
              <div className={styles.offerNumber}>4</div>
              <h4>Real Case Studies</h4>
              <p>
                Learn from documented phishing attacks. Understand actual tactics used by attackers and how to recognize them in the wild.
              </p>
              <ul>
                <li>5 real-world attack case studies</li>
                <li>Explanation of what made them convincing</li>
                <li>Warning indicators and red flags</li>
                <li>Lessons learned from each attack</li>
              </ul>
            </div>

            <div className={styles.offerCard}>
              <div className={styles.offerNumber}>5</div>
              <h4>Browser Extension (Planned)</h4>
              <p>
                Our Chrome extension will provide real-time analysis of emails and suspicious links directly in your browser.
              </p>
              <ul>
                <li>One-click email analysis</li>
                <li>Real-time threat detection</li>
                <li>Link safety verification</li>
                <li>AI-powered risk scoring</li>
              </ul>
            </div>

            <div className={styles.offerCard}>
              <div className={styles.offerNumber}>6</div>
              <h4>Backend API (Planned)</h4>
              <p>
                Future backend integration will enable enterprise deployments, advanced analytics, and organization-wide training tracking.
              </p>
              <ul>
                <li>Enterprise API access</li>
                <li>User management and analytics</li>
                <li>Training progress tracking</li>
                <li>Reporting and compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Architecture */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            title="Technology Stack"
            subtitle="Modern tools for building PhishGuardAI"
          />

          <div className={styles.techGrid}>
            <Card title="Frontend" icon="⚛️">
              <ul className={styles.techList}>
                <li>React - UI component framework</li>
                <li>Vite - Fast build tool</li>
                <li>React Router - Client-side routing</li>
                <li>CSS Modules - Scoped styling</li>
              </ul>
            </Card>

            <Card title="Machine Learning (Planned)" icon="🤖">
              <ul className={styles.techList}>
                <li>Feature engineering for email analysis</li>
                <li>Phishing pattern recognition</li>
                <li>Risk scoring models</li>
                <li>Continuous model improvement</li>
              </ul>
            </Card>

            <Card title="Backend (Planned)" icon="🔧">
              <ul className={styles.techList}>
                <li>API for email analysis</li>
                <li>User management system</li>
                <li>Analytics and reporting</li>
                <li>Model serving and inference</li>
              </ul>
            </Card>

            <Card title="Deployment" icon="🚀">
              <ul className={styles.techList}>
                <li>Cloud hosting (AWS/Azure)</li>
                <li>CI/CD pipelines</li>
                <li>Security and compliance</li>
                <li>Scalability and reliability</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            title="System Architecture"
            subtitle="How PhishGuardAI components work together"
          />

          <div className={styles.architectureFlow}>
            <div className={styles.flowBox}>
              <span className={styles.flowLabel}>User</span>
              <p>Student, Employee,<br/>Security-conscious person</p>
            </div>

            <svg className={styles.arrow} viewBox="0 0 30 30" width="30" height="30">
              <line x1="5" y1="15" x2="25" y2="15" stroke="currentColor" strokeWidth="2" />
              <polygon points="25,15 20,10 20,20" fill="currentColor" />
            </svg>

            <div className={styles.flowBox}>
              <span className={styles.flowLabel}>Frontend</span>
              <p>Web Learning Platform<br/>Training Lab & Quiz</p>
            </div>

            <svg className={styles.arrow} viewBox="0 0 30 30" width="30" height="30">
              <line x1="5" y1="15" x2="25" y2="15" stroke="currentColor" strokeWidth="2" />
              <polygon points="25,15 20,10 20,20" fill="currentColor" />
            </svg>

            <div className={styles.flowBox}>
              <span className={styles.flowLabel}>Browser Ext</span>
              <p>Chrome Extension<br/>Real-time Detection</p>
            </div>

            <svg className={styles.arrow} viewBox="0 0 30 30" width="30" height="30">
              <line x1="5" y1="15" x2="25" y2="15" stroke="currentColor" strokeWidth="2" />
              <polygon points="25,15 20,10 20,20" fill="currentColor" />
            </svg>

            <div className={styles.flowBox}>
              <span className={styles.flowLabel}>Backend API</span>
              <p>Email Analysis<br/>ML Model Serving</p>
            </div>

            <svg className={styles.arrow} viewBox="0 0 30 30" width="30" height="30">
              <line x1="5" y1="15" x2="25" y2="15" stroke="currentColor" strokeWidth="2" />
              <polygon points="25,15 20,10 20,20" fill="currentColor" />
            </svg>

            <div className={styles.flowBox}>
              <span className={styles.flowLabel}>ML Model</span>
              <p>Phishing Detection<br/>Risk Analysis</p>
            </div>

            <svg className={styles.arrow} viewBox="0 0 30 30" width="30" height="30">
              <line x1="5" y1="15" x2="25" y2="15" stroke="currentColor" strokeWidth="2" />
              <polygon points="25,15 20,10 20,20" fill="currentColor" />
            </svg>

            <div className={styles.flowBox}>
              <span className={styles.flowLabel}>Results</span>
              <p>Risk Score & Explanation<br/>User Feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            title="Team"
            subtitle="The people building PhishGuardAI"
          />

          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <Card key={member.id} title={member.name} variant="default" className={styles.teamCard}>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.responsibilities}>{member.responsibilities}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Resources */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeader
            title="Get Started"
            subtitle="Join us in building phishing awareness"
          />

          <div className={styles.resourcesGrid}>
            <Card title="Learn First" icon="📚">
              <p>Start with our learning platform to understand phishing tactics and indicators.</p>
              <a href="/learn" className={styles.resourceLink}>Go to Learn →</a>
            </Card>

            <Card title="Practice Next" icon="🎯">
              <p>Use the training lab to analyze realistic phishing emails and build your skills.</p>
              <a href="/training-lab" className={styles.resourceLink}>Go to Training Lab →</a>
            </Card>

            <Card title="Test Yourself" icon="✅">
              <p>Take our quiz to evaluate your phishing detection abilities and get a score.</p>
              <a href="/quiz" className={styles.resourceLink}>Take Quiz →</a>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className={styles.footerInfo}>
        <div className={styles.container}>
          <p>
            <strong>PhishGuardAI</strong> is a final year project designed as an educational platform for phishing awareness and detection. 
            This version is frontend-only. Future versions will include a Chrome extension and AI-powered backend API.
          </p>
          <p className={styles.disclaimer}>
            This is an educational tool. For real phishing incidents, contact your IT department or report to the FBI at ic3.gov.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
