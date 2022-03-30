import React from 'react'
import Card from './Card'

import img01 from '../assets/imgs/img-01.png'
import img02 from '../assets/imgs/img-02.png'
import img03 from '../assets/imgs/img-03.png'
import img04 from '../assets/imgs/img-04.png'
import img05 from '../assets/imgs/img-05.png'
import img06 from '../assets/imgs/img-06.png'
import img07 from '../assets/imgs/img-07.png'
import img08 from '../assets/imgs/img-08.png'

function Board() {
  //import images

  //store images in an array:

  const imgArray = [img01, img02, img03, img04, img05, img06, img07, img08]

  //array of card data objects
  const cardsData = []

  //set to original index
  imgArray.forEach((image, index) => {
    const card = {
      image: image,
      ind: index,
      clicked: false,
    }
    cardsData.push(card)
  })

  console.log(cardsData)

  //function passed to card to be triggered on click:
  function clickedCard(withInd) {
    //if card has been clicked trigger score reset
    //trigger reset of clicked value
  }

  function toggleClicked(withInd) {}

  //create card objects

  //board has an array of tiles that are created & shuffled here

  return (
    <div className="board-container">
      {cardsData.map((card) => (
        <Card card={card} />
      ))}
    </div>
  )
}

export default Board
