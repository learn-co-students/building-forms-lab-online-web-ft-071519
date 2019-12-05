// Add BandInput component
import React, { Component } from 'react'

class Bands extends Component {
    render() {
        const bands = this.props.bands.map(band => {
            return <li>{band.name}</li>
        })
        return(
          <div>
            Bands
            {bands}
          </div>
        )
      }
}

export default Bands