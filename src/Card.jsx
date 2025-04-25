import {useEffect, useState} from 'react'
import './styles/card.css'


function Card({id, name, image, handleClick}){

    return (

        <div onClick={() => handleClick(id)} className='card'>
            {image ? (
                <img src={image} alt={name} />
                                                ) : (
                <div>No image available</div>  // you can replace this with nothing if you want
            )}
            <p>{name}</p>
        </div>
      );


}


export default Card;