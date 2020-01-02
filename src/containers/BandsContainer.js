// 7) renders a list element for each of the bands in
// 8) renders each li with the correct name

import React, { Component } from 'react'
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {

  bandsList = (bands) =>
    bands.map((band, index) =>
      <li key={index}>{band.name}</li>
    );

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.bandsList(this.props.bands)}
        </ul>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addBand: band => dispatch({ type: 'ADD_BAND', band })
  }
};

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
