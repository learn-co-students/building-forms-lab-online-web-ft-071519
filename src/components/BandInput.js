// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }

  }
  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return(
      <div>
        <h2>Band Input</h2>
        <form onSubmit={this.props.addBand} id="add-band-form">
          <input type="text" name="text" onChange={e => this.handleChange(e)} placeholder="Add a New Band" />
          <input type="submit" id="new-band-submit-btn" />
        </form>
      </div>
    )
  }
}

export default BandInput
