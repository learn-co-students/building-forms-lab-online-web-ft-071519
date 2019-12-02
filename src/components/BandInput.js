// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

export default class BandInput extends Component {
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

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state);
  }

  render() {
    return(
      <div>
        <h2>Band Input</h2>
        <form onSubmit={e => this.handleSubmit(e)} id="add-band-form">
          <input type="text" name="text" onChange={e => this.handleChange(e)} placeholder="Add a New Band" />
          <input type="submit" id="new-band-submit-btn" />
        </form>
        {this.state.name}
      </div>
    )
  }
}

