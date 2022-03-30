import React from 'react'

function Card(props) {
  //expect a cards data object
  const { card } = props

  return (
    <div className="card-container">
      <img src={card.image} />
    </div>
  )
}

export default Card
