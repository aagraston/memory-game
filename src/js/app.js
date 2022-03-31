import React, { useState } from 'react'
import Header from '../components/Header'
import ScoreBoard from '../components/ScoreBoard'
import Board from '../components/Board'
import Instructions from '../components/Instructions'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  const attainPoint = () => {
    setScore((prevScore) => {
      return prevScore + 1
    })
  }

  const resetScore = () => {
    if (score > highScore) {
      setHighScore(score)
    }

    setScore(0)
  }

  return (
    <div className="app">
      <Header />
      <ScoreBoard score={score} highScore={highScore} />
      <div className="app-main-section">
        <Instructions />
        <Board />
      </div>
    </div>
  )
}

export default App
