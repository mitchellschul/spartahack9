import React from 'react'
import '../CSS/DrinkCard.css'


const DrinkCard = (props) => {


    return (


        <div class="card">
            <img src={props.img} alt={props.name} />
            <div class="overlay">
                <div class="rating">{props.rating}</div>
            </div>
            <div class="description">
                <p>{props.name}</p>
            </div>
        </div>


    )
}

export default DrinkCard