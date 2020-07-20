export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
      console.log(action)
      console.log(action.payload) //pattern1
      console.log(action.payload.name) //pattern1
      return {bands: state.bands.concat(action.payload)} //pattern1

      // console.log(action.band) //pattern2
      // return { ...state, bands: [...state.bands, action.band] } //pattern2
     
    default:
        return state
  }
  
};
