import { useState, useEffect } from 'react'
import './styles/MemoryGame.css'
import Card from './Card.jsx'

function MemoryGame({level, cardData, handleLevel}) {

  
  const [bestScore, setBestScore] = useState(0); // best score counter 
  const [currentScore, setCurrentScore] = useState(0);  // current score counter
  const [selectData, setSelectData] = useState();
  const [winner, setWinner] = useState(false);

  // useEffect to filter out the cardData based on the level

  useEffect( () =>{
    let cardCount = 4;
    if (level == 2){
      cardCount = 8;
    }
    else if (level == 3){
      cardCount = 12;
    }
    cardData.sort(() => Math.random() - 0.5); // shuffle the data 
    const selected = cardData.slice(0, cardCount); // grabbing the amount of cards based on the level
    setSelectData(selected);

  }, [level, cardData]);


  // This function tests if the person clicked all the cards
  function handleWinner(currentScore, cardData){
    if (currentScore === cardData.length){
        return true;
    }
    return false;
  }


  function handleClick(id){
    // Grab the id
    const clickedCard = selectData.find((card) => card.id == id);

    // Calculate if winner
    if(handleWinner(currentScore, selectData)){
      if (currentScore > bestScore){
        setBestScore(currentScore);
      }

      setWinner(true); // there is a winner!! - need to figure out how to display this
      setLevel(0); // set back so that it is not conditionally rendered 
      return;
    }

    if (clickedCard.clicked){
      // the card was clicked before so we set the score back too -1 and we return
      // NEED TO HANDLE BEST SCORE 
      if (currentScore > bestScore){
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setLevel(0);
      return;
    }

    // Not clicked - increase the score by 1, set clicked to true for that card, keep playing game
    setCurrentScore(currentScore+1);
    clickedCard.clicked = true;
    return;
  }


  return (
    <>
      {/* Have conditional that tests whether or whether not to display the card - playGame one - need to figure out how to return to previous page */}
      {/* When rendering pass the handleClick function through and pass the Id thruogh it for that one pass card.id, put the key as the id */}
      <p>PLAY GAME</p>
    </>
  )
}

export default MemoryGame;
