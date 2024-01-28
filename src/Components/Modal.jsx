import React from 'react';
import '../CSS/recipe.css';

let image = ''

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return(
    <div class='overlay'>
        <div class='modalContainer'>
            <img src={image} alt=' /'></img>
            <div class = 'modalRight'>
                <p onClick={onClose} class="closeBtn">X</p>
                <div class="content">
                <h1>Vodka Lemonade</h1>
                    <p>2oz Vodka, 6oz Lemonade, Lemon Peels for garnish</p>
                    <p>Fill glass with ice, add in vodka, pour in lemonade, lightly mix with a spoon. Garnish with lemon peels</p>
                </div>
                <div class = "btnContainer">
            </div>
        </div>
    </div>
</div>
    )
}

export default Modal;