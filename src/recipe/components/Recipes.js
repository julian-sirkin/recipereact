import React, { Component } from 'react'
import Recipe from './Recipe'

 class Recipes extends Component {
  render() {
    const { recipes } = this.props
    return (
      <React.Fragment>
          {recipes.map(recipe => (
              <Recipe key={recipe.userDbId} recipe={recipipe} 
          ))}
      </React.Fragment>
    )
  }
}
export default Recipes