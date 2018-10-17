import React, { Component } from 'react'

class Recipe extends Component {
  render() {
    const {uri, userDbId, image, label } = this.props.recipe.recipe
    const key = this.props
    console.log(key)
    return (
      <div className="card card-body mb-3 text-center col-md-4 col-sm-6">
        <img src={image} alt="" className="col-10 offset-1" />
        <h5>{label}</h5>
        {userDbId ? (
          <button type="submit" name={userDbId} className="btn">
            Remove Recipe
          </button>
        ) : (
          <button type="submit" name={uri} className="btn">
            Save Recipe
          </button>
        )}
      </div>
    )
  }
}
export default Recipe
