import React, { Component } from 'react'
import Header from '../components/Header'
import ScoreBoard from '../components/ScoreBoard'
import Board from '../components/Board'
import Instructions from '../components/Instructions'

function App() {
  return (
    <div className="app">
      <Header />
      <ScoreBoard />
      <div className="app-main-section">
        <Instructions />
        <Board />
      </div>
    </div>
  )
}

export default App
