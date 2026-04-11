import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import QuizCard from '../components/QuizCard'
import { quizQuestions } from '../data/mockData'
import styles from './Quiz.module.css'

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const totalQuestions = quizQuestions.length
  const currentQ = quizQuestions[currentQuestion]

  const handleSelectAnswer = (index) => {
    if (!showExplanation) {
      setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index })
      setShowExplanation(true)
    }
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setShowExplanation(false)
    }
  }

  const calculateScore = () => {
    let correct = 0
    quizQuestions.forEach((question, idx) => {
      const userAnswerIdx = selectedAnswers[idx]
      if (userAnswerIdx !== undefined && question.options[userAnswerIdx].correct) {
        correct++
      }
    })
    return (correct / totalQuestions) * 100
  }

  const score = calculateScore()

  const getScoreMessage = () => {
    if (score === 100) return "Perfect! You're a phishing detection expert!"
    if (score >= 85) return "Excellent! You have strong phishing awareness."
    if (score >= 70) return "Good job! You're on your way to phishing mastery."
    if (score >= 50) return "Not bad! Review the learning materials and try again."
    return "Keep practicing! Phishing awareness takes time to develop."
  }

  if (quizCompleted) {
    const correctAnswers = Object.keys(selectedAnswers).filter(
      idx => quizQuestions[idx].options[selectedAnswers[idx]].correct
    ).length

    return (
      <div className={styles.quiz}>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.resultCard}>
              <h2 className={styles.resultTitle}>Quiz Complete!</h2>

              <div className={styles.scoreDisplay}>
                <div className={styles.scoreCircle} style={{
                  background: score >= 70
                    ? `conic-gradient(var(--safe) ${score}%, var(--border) 0)`
                    : score >= 50
                    ? `conic-gradient(var(--warning) ${score}%, var(--border) 0)`
                    : `conic-gradient(var(--danger) ${score}%, var(--border) 0)`
                }}>
                  <div className={styles.scoreInner}>
                    <p className={styles.scoreNumber}>{Math.round(score)}%</p>
                    <p className={styles.scoreLabel}>Score</p>
                  </div>
                </div>
              </div>

              <div className={styles.resultsStats}>
                <p><strong>Correct Answers:</strong> {correctAnswers} out of {totalQuestions}</p>
                <p><strong>Accuracy:</strong> {Math.round(score)}%</p>
              </div>

              <p className={styles.message}>{getScoreMessage()}</p>

              <div className={styles.nextSteps}>
                <h3>Next Steps</h3>
                {score >= 70 ? (
                  <div className={styles.advice}>
                    <p>🎉 Great job! You have solid phishing awareness. Continue to:</p>
                    <ul>
                      <li>Review the Real Cases section to learn about actual attacks</li>
                      <li>Practice the Training Lab exercises regularly</li>
                      <li>Stay updated on new phishing tactics</li>
                    </ul>
                  </div>
                ) : (
                  <div className={styles.advice}>
                    <p>📚 Let's improve! Here's what to do:</p>
                    <ul>
                      <li>Review the Learn section for phishing indicators</li>
                      <li>Spend more time in the Training Lab analyzing emails</li>
                      <li>Retake this quiz to test your progress</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className={styles.actionButtons}>
                <button onClick={() => {
                  setCurrentQuestion(0)
                  setSelectedAnswers({})
                  setShowExplanation(false)
                  setQuizCompleted(false)
                }} className={styles.retakeBtn}>
                  Retake Quiz
                </button>
                <a href="/learn" className={styles.learnBtn}>
                  Review Learning Materials
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className={styles.quiz}>
      <section className={styles.introSection}>
        <div className={styles.container}>
          <SectionHeader
            title="Phishing Detection Quiz"
            subtitle="Test your knowledge and build your awareness skills"
          />
          <p className={styles.quizIntro}>
            Answer 8 questions about phishing detection. Take your time and think carefully about each answer.
          </p>
        </div>
      </section>

      <section className={styles.quizSection}>
        <div className={styles.container}>
          <div className={styles.quizContent}>
            <div className={styles.progressContainer}>
              <div className={styles.progressLabel}>
                Question {currentQuestion + 1} of {totalQuestions}
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
                ></div>
              </div>
            </div>

            <QuizCard
              question={currentQ}
              selectedAnswer={selectedAnswers[currentQuestion]}
              onSelectAnswer={handleSelectAnswer}
              showExplanation={showExplanation}
            />

            <div className={styles.navigationButtons}>
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={styles.navBtn}
              >
                ← Previous
              </button>

              <button
                onClick={handleNext}
                className={`${styles.navBtn} ${styles.nextBtn}`}
              >
                {currentQuestion === totalQuestions - 1 ? 'Finish Quiz' : 'Next →'}
              </button>
            </div>

            <div className={styles.questionIndicators}>
              {quizQuestions.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.indicator} ${idx === currentQuestion ? styles.active : ''} ${
                    selectedAnswers[idx] !== undefined && quizQuestions[idx].options[selectedAnswers[idx]].correct
                      ? styles.correct
                      : ''
                  } ${
                    selectedAnswers[idx] !== undefined && !quizQuestions[idx].options[selectedAnswers[idx]].correct
                      ? styles.incorrect
                      : ''
                  }`}
                  onClick={() => {
                    setCurrentQuestion(idx)
                    setShowExplanation(false)
                  }}
                  title={`Question ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Quiz
