import React from 'react'

function Card(props) {
  //expect a cards data object
  const { card, clickedCard } = props

  return (
    <div className="card-container">
      <img src={card.image} onClick={clickedCard.bind(this, card)} />
    </div>
  )
}

export default Card
