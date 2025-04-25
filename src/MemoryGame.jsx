import { useState, useEffect } from 'react'
import './styles/MemoryGame.css'
import Card from './Card.jsx'

function MemoryGame({level, cardData, handleLevel}) {

  
  const [bestScore, setBestScore] = useState(0); // best score counter 
  const [currentScore, setCurrentScore] = useState(0);  // current score counter
  const [selectData, setSelectData] = useState([]);
  const [winner, setWinner] = useState(false);

  // useEffect to filter out the cardData based on the level
  useEffect( () =>{
    if (!cardData) return;

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


  // handles the clicking of the cards that will be called on each card
  function handleClick(id){
    // Grab the id
    const clickedCard = selectData.find((card) => card.id == id);

    // check if card clicked before 
    if (clickedCard.clicked){
      // the card was clicked before so we set the score back too -1 and we return
      // NEED TO HANDLE BEST SCORE 
      if (currentScore > bestScore){
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      handleLevel(0);
      return;
    }

    // Not clicked - increase the score by 1, set clicked to true for that card, keep playing game
    setCurrentScore(currentScore+1);
    clickedCard.clicked = true;

    // Calculate if winner
    if(handleWinner(currentScore, selectData)){
      // update best score
      if (currentScore > bestScore){
        setBestScore(currentScore);
      }

      setWinner(true); // there is a winner!! - need to figure out how to display this
      handleLevel(0); // set back so that it is not conditionally rendered 
      return;
    }

    // reshuffle data
    const shuffled = [...selectData].sort(() => Math.random() - 0.5);
    setSelectData(shuffled);

    
    return;
  }


  return (
    <>
      {/* Have conditional that tests whether or whether not to display the card - playGame one - need to figure out how to return to previous page */}
      {/* When rendering pass the handleClick function through and pass the Id thruogh it for that one pass card.id, put the key as the id */}

      {/* When i dont give correct score i need a conditional to say try this level again and it will resume or i need it to go pack to main page  */}

      {selectData.map((card) => (
        <Card 
          key={card.id}
          id={card.id}
          name={card.name}
          image={card.image}
          handleClick={handleClick}
        />
      ))}

      <div>
        <div>Current Score: {currentScore}</div>
        <div>Best Score: {bestScore}</div>
        
      </div>


    </>
  )
}

export default MemoryGame;
