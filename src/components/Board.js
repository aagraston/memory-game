import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid'
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
      id: uniqid(),
    }
    cardsData.push(card)
  })

  //set the card array, and the ability to set a new config for the card array
  const [cardArray, setCardArray] = useState(
    cardsData.map((card) => <Card key={uniqid()} card={card} />)
  )

  console.log(cardArray)

  //function passed to card to be triggered on click:
  function clickedCard(withInd) {
    //if card has been clicked trigger score reset
    //trigger reset of clicked value
  }

  function toggleClicked(withInd) {
    //toggle the card that was clicked
  }

  function shuffleCards() {
    setCardArray((prevArray) => {
      let newArray = []
      let curInd = prevArray.length
      let randInd = 0

      while (curInd != 0) {
        randInd = Math.floor(Math.random() * curInd)
        curInd--
        ;[cardArray[curInd], cardArray[randInd]] = [
          cardArray[randInd],
          cardArray[curInd],
        ]
      }
    })
  }

  shuffleCards()

  //create card objects

  //board has an array of tiles that are created & shuffled here

  return <div className="board-container">{cardArray}</div>
}

export default Board
