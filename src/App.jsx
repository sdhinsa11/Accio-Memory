import { useState, useEffect } from 'react'
import './styles/App.css'
import MemoryGame from './MemoryGame.jsx'



// This is where we call API and start the game
// Call the levels 

let id = 0;

function App(){
    
    const [cardData, setCardData] = useState(); // Data for the cards
    const [level, setLevel] = useState(0); // 1 is easy, 2 is medium, 3 is hard - check if 0 after clicked and then call the 
    const [playGame, setPlayGame] = useState(false); // tracks if we can still play the game 



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

    function handleLevel(levelNumber){
        setLevel(levelNumber);
    }

    return (
        <>
            <div className='header'>Accio Memory</div>
            {/* Call the memory, show the levels here  */}

            <div className='difficultyLevel'>
                <div>
                    {(level > 0) ? 
                    
                    // Shows this once pressed the level, the level gets reset after
                    (<MemoryGame level = {level} cardData={cardData} handleLevel={setLevel}></MemoryGame>) : 
                    
                    (<>
                        {/* shows this if haven't started the game yet */}
                        <div className='title'>Pick a Level</div>
                        <div>
                            <div className='level-Easy' onClick={() => handleLevel(1)}>Easy</div>
                            <div className='level-Med'  onClick={() => handleLevel(2)}>Medium</div>
                            <div className='level-Hard' onClick={() => handleLevel(3)}>Hard</div>
                        </div> 
                    </>)}
                </div>
            </div>
        </>
    );

}


export default App;