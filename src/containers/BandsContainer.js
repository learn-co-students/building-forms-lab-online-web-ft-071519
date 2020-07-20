import React, { Component } from 'react'
import BandInput from "../components/BandInput"
import { connect } from "react-redux";
import BandList from "../components/BandList"

class BandsContainer extends Component {
  render() {
    console.log(this.props)
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <BandList bands={this.props.bands}/>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  addBand: (band) => dispatch({ type: "ADD_BAND", payload: band})  //pattern1
  // addBand: band => dispatch({ type: "ADD_BAND", band }) //pattern 2
});

export default connect(state => state, mapDispatchToProps)(BandsContainer)
