import React from "react";
//import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from './containers/Register';
import MapContainer from "./components/MapContainer";
function App() {
  
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/map" component={MapContainer} />
      </div>
    </Router>
  );
}
export default App;
/*
const mapStateToProps = state => ({
  discounts: state.discounts.discounts,
  loading: state.discounts.loading,
  error: state.discounts.error,
  foodCategory: state.discounts.foodCategory,
  timeSlot: state.discounts.timeSlot,
  isAuthenticated: state.auth.token !==null
});

const mapDispatchToProps = dispatch => ({
  handleFoodChange: event => dispatch(addFoodCategory(event)),
  handleTimeChange: event => dispatch(addTimeSlot(event)),
  fetchDiscounts: () => dispatch(fetchDiscounts()),
  handleSearchButtonClick: (food, time) =>
    dispatch(handleSearchButtonClick(food, time)),
  fetchTimeSlot: time => dispatch(fetchTimeSlot(time)),
  onAddedToLikes: (id) => dispatch(addedToFavorites(id)),
  onTryAutoSignup: () => dispatch(authActions.authCheckState())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);*/

