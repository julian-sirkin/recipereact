import React, { Component } from 'react'
import Recipe from './Recipe'

class Recipes extends Component {
  render() {
    const recipeCards = this.props.recipes.data.body.map(recipe => {
      return (
        <Recipe key={recipe.recipe.uri} recipe={recipe} />
      )
    })
    return (
      <div className="d-flex flex-wrap">
        {recipeCards}
      </div>
    )
  }
}
export default Recipes
