import React from 'react'
import styles from './QuizCard.module.css'

function QuizCard({ question, selectedAnswer, onSelectAnswer, showExplanation }) {
  return (
    <div className={styles.quizCard}>
      <h3 className={styles.question}>{question.question}</h3>

      <div className={styles.options}>
        {question.options.map((option, idx) => (
          <button
            key={idx}
            className={`${styles.option} ${selectedAnswer === idx ? styles.selected : ''} ${
              showExplanation && option.correct ? styles.correct : ''
            } ${showExplanation && selectedAnswer === idx && !option.correct ? styles.incorrect : ''}`}
            onClick={() => onSelectAnswer(idx)}
            disabled={showExplanation}
          >
            <span className={styles.optionLetter}>{String.fromCharCode(65 + idx)}</span>
            <span className={styles.optionText}>{option.text}</span>
            {showExplanation && option.correct && <span className={styles.checkmark}>✓</span>}
            {showExplanation && selectedAnswer === idx && !option.correct && <span className={styles.xmark}>✕</span>}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className={styles.explanation}>
          <h4>Explanation:</h4>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  )
}

export default QuizCard
