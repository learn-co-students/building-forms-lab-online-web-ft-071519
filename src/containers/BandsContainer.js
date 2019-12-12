// 7) renders a list element for each of the bands in
// 8) renders each li with the correct name

import React, { Component } from 'react'
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
        </ul>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addBand: band => dispatch({ type: 'ADD_BAND', band })
  }

}

export default connect(null, mapDispatchToProps)(BandsContainer)
