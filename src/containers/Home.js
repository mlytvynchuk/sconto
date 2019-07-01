import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import * as authActions from '../actions/authActions'

import Discounts from "../components/Discounts";
import {
  fetchDiscounts,
  addFoodCategory,
  addTimeSlot,
  handleSearchButtonClick,
  fetchTimeSlot,
  fetchFavorites,
} from "../actions/discountActions";
import { getUser } from "../actions/userActions";
import { setTimeout } from "timers";
class Home extends Component {
  componentDidUpdate(prevProps){
      if (JSON.stringify(this.props.likes) !== JSON.stringify(prevProps.likes)){
          setTimeout(() => {
            this.props.getLikes();
          }, 500);
      }
  }
  componentDidMount() {
    this.props.onTryAutoSignup();

      this.props.getUser()
      .then(() =>{
        if(this.props.isAuthenticated){
          this.props.getLikes();
        }
      });
    this.props.fetchDiscounts();
    this.getTime();
  }

  getTime = () => {
    const today = new Date();
    const hours = today.getHours();
    if (hours < 12) {
      this.props.fetchTimeSlot("Сніданок");
    } else if (hours < 18) {
      this.props.fetchTimeSlot("Обід");
    } else {
      this.props.fetchTimeSlot("Вечеря");
    }
  };

  render() {
    return (
      <div>
        <Navbar {...this.props}
          timeSlot={this.props.timeSlot}
          handleFoodChange={this.props.handleFoodChange}
          handleTimeChange={this.props.handleTimeChange}
          handleSearchButtonClick={this.props.handleSearchButtonClick}
          foodCategory={this.props.foodCategory}
          search={this.props.search}
        />
        
        <div className="main-container">
          <div className="grid"><Discounts /></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  discounts: state.discounts.discounts,
  loading: state.discounts.loading,
  error: state.discounts.error,
  foodCategory: state.discounts.foodCategory,
  timeSlot: state.discounts.timeSlot,
  isAuthenticated: state.auth.token !==null,
  user: state.auth.user,
  likes: state.discounts.favorites,
  search: state.discounts.search,
  
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  handleFoodChange: event => dispatch(addFoodCategory(event)),
  handleTimeChange: event => dispatch(addTimeSlot(event)),
  fetchDiscounts: () => dispatch(fetchDiscounts()),
  handleSearchButtonClick: (search, food, time) =>
  dispatch(handleSearchButtonClick(search, food, time)),
  fetchTimeSlot: time => dispatch(fetchTimeSlot(time)),
  onTryAutoSignup: () => dispatch(authActions.authCheckState()),
  logout: () => dispatch(authActions.logout()),
  getLikes: () => dispatch(fetchFavorites())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
