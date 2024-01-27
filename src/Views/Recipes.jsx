import React from 'react'
import "../../src/Css/recipe.css"

const Recipes = () => {
    return (
        <div className="App">
      <header>
        <h4>Recipes</h4>
      </header>

      <div className="container">
        <div className="image">
          <img></img>
        </div>
        <div className="content">
          <h5>Welcome to Our Website</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut elit auctor, placerat velit nec, vestibulum velit. Donec convallis eget velit ac lobortis.</p>
        </div>
        <div className="centered-text">
          <p>More information about the recipe, lorem ipsum etc.</p>
        </div>
      </div>
    </div>

    )
}

export default Recipes