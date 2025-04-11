import { useState, useEffect } from 'react'
import './styles/MemoryGame.css'
import Card from './Card.jsx'

function MemoryGame() {

  
  const [bestScore, setBestScore] = useState(0); // best score counter 
  const [currentScore, setCurrentScore] = useState(0);  // current score counter
  const [pressedCards, setPressedCards] = useState([]); // keeps track of what cards user pressed
  const [playGame, setPlayGame] = useState(true); // tracks if we can still play the game 
  const [flagData, setFlagData] = useState([]); // stores the data from Spotify API

  
  

  

  return (
    <>
      
    </>
  )
}

export default MemoryGame;
