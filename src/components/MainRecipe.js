import React, { Component } from 'react';

const API_KEY = "68a7261a3d4fa503790dcb8d00c49d42";

export default class MainRecipe extends Component {

  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {

    const title = this.props.location.state.recipe;
    const req = await fetch(`http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)
    
    const res = await req.json();
    console.log(res);
  }

  render() {
    return (
      <div>
        Recipe Component
      </div>
    )
  }
}
