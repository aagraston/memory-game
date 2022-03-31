import React from 'react'

function ScoreBoard(props) {
  const { score, highScore } = props

  return (
    <div className="generic-container score-container ">
      <div className="score-current">Score: {score}</div>
      <div className="score-best">Best: {highScore}</div>
    </div>
  )
}

export default ScoreBoard
