import { useState, useEffect } from 'react'
import './styles/App.css'
import MemoryGame from './MemoryGame.jsx'



// This is where we call API and start the game
// Call the levels 

let id = 0;

function App(){
    
    const [cardData, setCardData] = useState(); // Data for the cards
    const [level, setLevel] = useState(0); // 1 is easy, 2 is medium, 3 is hard - check if 0 after clicked and then call the 



    useEffect( () => {
        fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(data => {
            const formattedData = data.map(character => ({
                name: character.name,
                image: character.image,
                clicked: false,
                id: id++
            }));
            setCardData(formattedData);

        })
        .catch(error => {
            console.error("Error fetching characters: ", error)
        });
    }, []);

    function handleClick(levelNumber){
        setLevel(levelNumber);

        
    }



    


    return (
        <>
            <div className='header'>Accio Memory</div>
            {/* Call the memory, show the levels here  */}

            {/* only render this if level state variable is 0, otherwise show the other */}
            <div className='difficultyLevel'>
                <div className='title'>Pick a Level</div>
                <div>
                    <div className='level-Easy' onClick={() => handleClick(1)}>Easy</div>
                    <div className='level-Med'  onClick={() => handleClick(2)}>Medium</div>
                    <div className='level-Hard' onClick={() => handleClick(3)}>Hard</div>
                </div>
            </div>

        
        </>
    );




}


export default App;