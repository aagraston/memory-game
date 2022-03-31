import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid'
import Card from './Card'

//import images
import img01 from '../assets/imgs/img-01.png'
import img02 from '../assets/imgs/img-02.png'
import img03 from '../assets/imgs/img-03.png'
import img04 from '../assets/imgs/img-04.png'
import img05 from '../assets/imgs/img-05.png'
import img06 from '../assets/imgs/img-06.png'
import img07 from '../assets/imgs/img-07.png'
import img08 from '../assets/imgs/img-08.png'

function Board(props) {
  //deconstruct props
  const { attainPoint, resetScore } = props

  //store images in an array:

  const imgArray = [img01, img02, img03, img04, img05, img06, img07, img08]

  //an array of already clicked setUpImages
  const guesses = []

  //array of card data objects
  const [cardsData, setCardsData] = useState([])

  const setUpImages = () => {
    const tmpArray = []
    imgArray.forEach((image, index) => {
      const card = {
        image: image,
        ind: index,
        clicked: false,
        id: uniqid(),
      }
      tmpArray.push(card)
    })

    setCardsData(tmpArray)
  }

  useEffect(() => {
    setUpImages()
  }, [])

  //set to original index

  console.log(cardsData)

  //function passed to card to be triggered on click:
  const clickedCard = (withInd) => {
    let searchResult = guesses.find((obj) => {
      return obj.id === withInd.id
    })

    if (searchResult === undefined) {
      guesses.concat(withInd)
      attainPoint()
      shuffleCards(cardsData)
    } else {
      guesses = []
      resetScore()
      shuffleCards(cardsData)
    }
  }

  const shuffleCards = (arrayToShuffle) => {
    const tmpArray = arrayToShuffle
    console.log(tmpArray)
    for (let i = cardsData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = tmpArray[i]
      tmpArray[i] = tmpArray[j]
      tmpArray[j] = temp
    }
    return tmpArray
  }

  //create card objects

  //board has an array of tiles that are created & shuffled here

  return (
    <div className="board-container">
      {cardsData.map((card) => (
        <Card key={uniqid()} card={card} clickedCard={clickedCard} />
      ))}
    </div>
  )
}

export default Board
