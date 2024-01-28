import React from 'react'
import '../Css/DrinkCard.css'


const DrinkCard = (props) => {

    const rating = "*" * props.rating

    return (


        <div class="card">
            <img src={props.img} alt="Card Image" />
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