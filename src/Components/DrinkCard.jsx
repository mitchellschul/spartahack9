import React from 'react'
import '../CSS/DrinkCard.css'


const DrinkCard = (props) => {


    return (

        <div class="card">
            <div class='overlay'></div>
            <img
                class="card__background"
                src={props.img}
                alt="img"
            />
            <div class="inner-border">
            </div>

            <div class="drink-text">
                <div class="drink-name">
                    {props.name}
                </div>
                <div class="drink-description">
                    bitter - herbal - sweet
                </div>

            </div>
        </div >




    )
}

export default DrinkCard