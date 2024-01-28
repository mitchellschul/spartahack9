import React from 'react'
import "../../src/Css/recipe.css"

let text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut elit auctor, placerat velit nec, vestibulum velit. Donec convallis eget velit ac lobortis.';
//top line
let text2 = 'More information about the recipe.';
//bottom line 
let imageUrl = 'logo512.png';
const Recipes = () => {
    return (
     <div class="recipeBackground">
        <div className="App">
      <div class="recipeHeader">
        <h4>Recipe</h4>
      </div>
      <div className="container">
        <div className="image">
          <img src = {imageUrl}></img>
        </div>
        <div className="content">
          <h5>{text1}</h5>
        </div>
        <div className="centered-text">
          <h6>{text2}</h6>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Recipes