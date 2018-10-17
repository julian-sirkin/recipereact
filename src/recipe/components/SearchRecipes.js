import React, { Component } from 'react'
import axios from 'axios'
const apiUrl = 'http://localhost:4741'
import Recipes from './Recipes'
class SearchRecipes extends Component {
  constructor() {
    super()

    this.state = {
      searchParam: 'Search for Recipes',
      haveRecipes: false,
      recipes: []
    }
  }

  handleChange = event =>
    this.setState({
      searchParam: event.target.value
    })

  searchForRecipe = async (event) => {
    event.preventDefault()
    const recipeSearch = {recipe: {search: this.state.searchParam}}
    const response = await axios.get(`${apiUrl}/edaman`, {
      params: recipeSearch
    })
    this.setState ({
      recipes: response,
      haveRecipes: true
    })
  }
  render() {
    const { recipes, searchParam} = this.state
    return (
      !this.state.haveRecipes ? (
        <div className="card card-body text-center">
          <form onSubmit={this.searchForRecipe} action="">
            <div className="form-group">
              <label htmlFor="RecipeSearch">Search</label>
              <input type="text" value={searchParam} onChange={this.handleChange} className="form-text" />
            </div>
            <button type="submit" className="button">Search</button>
          </form>
        </div>
      ) : <Recipes recipes={recipes} />
    )}
}
export default SearchRecipes
