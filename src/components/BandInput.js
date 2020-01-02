// Add BandInput component
// 1) has a text input field
// 2) has an initial state with text key set to empty string
// 3) changes the local state on input change
// 4) has a prop, addBand, that is called when the form is submitted
// 5) using addBand, calls dispatch when form is submitted



import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    })
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Band Name:</label>
            <input type='text'
                   onChange={this.handleChange}
                   value={this.state.name}
            />
          </p>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
