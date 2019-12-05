// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({name: ""})
  }

  handleOnChange = event => {
    const newName = event.target.value;
    this.setState({
      name: newName
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Band name</label>
            <input 
              type="textarea"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
