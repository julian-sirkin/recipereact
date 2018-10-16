import React, { Component } from 'react'
import axios from 'axios'
const apiUrl = 'http://localhost:4741'

class SearchRecipes extends Component {
  constructor() {
    super()

    this.state = {
      searchParam: 'potato'
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
  }
  render() {
    return (
      <div className="card card-body text-center">
        <form onSubmit={this.searchForRecipe} action="">
          <div className="form-group">
            <label htmlFor="RecipeSearch">Search</label>
            <input type="text" value={this.state.searchParam} onChange={this.handleChange} className="form-text" />
          </div>
          <button type="submit" className="button">Search</button>
        </form>
      </div>
    )}
}
export default SearchRecipes
