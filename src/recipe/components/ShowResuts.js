import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Recipes from './Recipes.js'
import { withRouter, Redirect } from 'react-router-dom'


class ShowResults extends Component {
  constructor (props) {
    super()
  }


  redirectToSearch = () => this.props.history.push('/search-recipes/')

  render () {
    const recipeArr = this.props.location.state.recipes
    const user = this.props.location.state.user
    console.log(recipeArr, 'recipes')
    console.log(user, 'user')
    return (
      <React.Fragment>
        {recipeArr ? (
          <Recipes user={user} recipes={recipeArr}/>
        ) : (
          <Redirect to='/search-recipes/' />
        ) }

      </React.Fragment>
    )
  }
}

export default withRouter(ShowResults)
