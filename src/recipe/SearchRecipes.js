import React, { Component } from 'react'

class SearchRecipes extends Component {
  constructor() {
    super()

    this.state = {
      searchParam: ''
    }
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    })

  searchForRecipe = event => {
    event.preventDefault
    const { searchParam } = this.state
  };
  render() {
    return (
      <div className="card card-body text-center">
        <form action="">
          <div className="form-group">
            <label htmlFor="RecipeSearch">Search</label>
            <input type="text" className="form-text" />
          </div>
          <button type="submit" className="button">Search</button>
        </form>
      </div>
    )}
}
export default SearchRecipes
