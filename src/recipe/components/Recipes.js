import React, { Component } from 'react'
import Recipe from './Recipe'
import { withRouter } from 'react-router-dom'


class Recipes extends Component {
  render() {
    const user = this.props.user
    const recipeCards = this.props.recipes.data.body.map(recipe => {
      return (
        <Recipe key={recipe.recipe.uri} user={user} recipe={recipe} />
      )
    })
    return (
      <div className="container d-flex flex-wrap">
        {recipeCards}
      </div>
    )
  }
}
export default Recipes
