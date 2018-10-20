import React, { Component } from 'react'
import axios from 'axios'
const apiUrl = 'http://localhost:4741'
import Recipes from './Recipes'
import { withRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'

class SearchRecipes extends Component {
  constructor() {
    super()

    this.state = {
      searchParam: '',
      haveRecipes: false,
      recipes: []
    }
  }

  handleChange = event => {
    this.setState({
      searchParam: event.target.value
    })
  }
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
    this.props.history.push({
      pathname: '/recipe-results',
      state: {
        recipes: this.state.recipes,
        user: this.props.user
      }
    })
  }
  render() {
    const { recipes, searchParam, haveRecipes} = this.state
    return (
      <React.Fragment>
        <div className="card card-body text-center">
          <form onSubmit={this.searchForRecipe} action="">
            <div className="form-group">
              <label htmlFor="RecipeSearch">Search</label>
              <input type="text" value={searchParam} onChange={this.handleChange} className="form-text" />
            </div>
            <button type="submit" className="button">Search</button>
          </form>
        </div>
      </React.Fragment>
    )}
}
export default withRouter(SearchRecipes)
