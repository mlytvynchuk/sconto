import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from './containers/Register';
import {connect} from 'react-redux';
import { compose } from 'redux'
import * as authActions from './actions/authActions'
import {
  fetchDiscounts,
  addFoodCategory,
  addTimeSlot,
  handleSearchButtonClick,
  fetchTimeSlot,
  addedToFavorites
} from "./actions/discountActions";
class App extends React.Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render(){
    return (
      <Router >
        <div  >
          <Route  exact path="/" component={Home} />
          <Route {...this.props} exact path="/login" component={Login} />
          <Route {...this.props} exact path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

