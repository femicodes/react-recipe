import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
         <form onSubmit={this.props.getRecipe} style={{ marginBottom: "2rem" }}>
          <input className="form__input" type="text" name="recipeName"/>
          <button className="form__button">Search</button>
        </form>
      </div>
    )
  }
}
