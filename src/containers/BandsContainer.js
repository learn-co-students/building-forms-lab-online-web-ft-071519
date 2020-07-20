import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  constructor() {
    super();
    this.state = {
      bands: []
    }
  }

  // handleSubmit = e => {
  //   debugger
  //   console.log('in bandscontainer handlesubmit', e);
  //   this.props.addBand()
  // }

  render() {
    //debugger
    return(
      <div>
        <h1>Bands Container</h1>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map(b => <li>{b.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => {
      dispatch({ type: 'ADD_BAND', band: band })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
