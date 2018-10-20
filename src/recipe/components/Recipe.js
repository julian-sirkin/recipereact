import React, { Component } from 'react'
const apiUrl = 'http://localhost:4741'
import { withRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import axios from 'axios'



class Recipe extends Component {


  removeRecipe = dbId => {
  }
  saveRecipe = async uri => {
    const user = this.props.user
    // const response = await fetch(apiUrl + '/recipes', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Token token=${user.token}`
    //   },
    //   body: JSON.stringify({
    //     recipe: {
    //       recipeId: uri
    //     }
    //   })
    // })
    const response = await axios.post(apiUrl + '/recipes', {
      recipe: {
        recipeId: uri
      }
    },
    {
      headers: {
        'Authorization': `Token token=${user.token}`,
        'Access-Control-Allow-Origin': '*'
      }
    })


    console.log('recipe save', response)
  }

  handleClick = event => {
    event.preventDefault()
    const {uri, userDbId } = this.props.recipe.recipe
    userDbId ? this.removeRecipe(userDbId) : this.saveRecipe(uri)
  }

  render() {
    const {uri, userDbId, image, label } = this.props.recipe.recipe
    return (
      <div className="card card-body mb-3 text-center col-md-4 col-sm-6">
        <img src={image} alt="" className="col-10 offset-1" />
        <h5>{label}</h5>
        {userDbId ? (
          <div onClick={this.handleClick}>
            <button type="submit" name={userDbId} className="btn">
              Remove Recipe
            </button>
          </div>
        ) : (
          <div onClick={this.handleClick}>
            <button type="submit" name={uri} className="btn btn-primary">
              Save Recipe
            </button>
          </div>

        )}
      </div>
    )
  }
}
export default withRouter(Recipe)
