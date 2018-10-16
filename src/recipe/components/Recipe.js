import React, { Component } from "react"

class Recipe extends Component {
  render() {
    const { uri, image, label, userDbId } = this.props.recipe;
    return (
      <div className="card card-body mb-3 text-center col-md-4 col-sm-6">
        <img src="{image}" alt="" className="col-12" />
        <h5>{label}</h5>
        {userDbId ? (
          <button name={userDbId} className="btn">
            Remove Recipe
          </button>
        ) : (
          <button name={uri} className="btn">
            Remove Recipe
          </button>
        )}
      </div>
    )
  }
}
export default Recipe
