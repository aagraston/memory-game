import React, { Component } from 'react'
import Header from '../components/Header'
import Score from '../components/Score'
import Board from '../components/Board'

function App() {
  return (
    <div className="app">
      <Header />
      <Score />
      <Board />
    </div>
  )
}

export default App
