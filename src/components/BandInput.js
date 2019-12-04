
import React, { Component } from 'react'

class BandInput extends Component {


  state = {
    name: ''
  };

  handleOnChange = (event) =>{
    console.log(this.state)
    this.setState({
      name: event.target.value
    })
  };

  handleOnSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state)
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>Band Name:
          <input onChange={this.handleOnChange} type="text" value={this.state.name}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
