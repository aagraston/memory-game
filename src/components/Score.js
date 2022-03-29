import React from 'react'

function Score() {
  const curScore = 0
  const bestScore = 0

  return (
    <div className="generic-container score-container ">
      <div className="score-current">Score: {curScore}</div>
      <div className="score-best">Best: {bestScore}</div>
    </div>
  )
}

export default Score
