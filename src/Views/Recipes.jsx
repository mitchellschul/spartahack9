import React from 'react'
import "../../src/Css/recipe.css"

const Recipes = () => {
    return (
     <div class="recipeBackground">
        <div className="App">
      <header>
        <h4>Recipes</h4>
      </header>

      <div className="container">
        <div className="image">
          <img></img>
        </div>
        <div className="content">
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut elit auctor, placerat velit nec, vestibulum velit. Donec convallis eget velit ac lobortis.</h5>
        </div>
        <div className="centered-text">
          <h6>More information about the recipe, lorem ipsum etc.</h6>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Recipes