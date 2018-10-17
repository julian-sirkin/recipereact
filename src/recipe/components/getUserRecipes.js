import React, { Component } from 'react'
import axios from 'axios'
const apiUrl = 'http://localhost:4741'
import Recipes from './Recipes'
import { withRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'

class GetUserRecipes extends Component {
  constructor() {
    super()

    this.state = {
      searchParam: 'Search for Recipes',
      haveRecipes: false,
      recipes: []
    }
  }


  userRecipes = async (event) => {
    console.log('I have been clicked')
    const user = this.props.user
    const userRecipesCall = await (
      fetch('http://localhost:4741/recipes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token token=${user.token}`
        }
      })
    )
    this.setState ({
      recipes: userRecipesCall
    })
    console.log(this.state.recipes)
    // this.props.history.push({
    //   pathname: '/recipe-results',
    //   state: this.state.recipes
    // })

  }
  render() {
    return (
      <h1 onClick={this.userRecipes}>Hello!</h1>
    )}
}
export default withRouter(GetUserRecipes)
