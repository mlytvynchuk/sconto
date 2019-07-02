import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import * as authActions from '../actions/authActions'
import Discounts from "../components/Discounts";
import {
  fetchDiscounts,
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

      if(this.props.isAuthenticated){
        this.props.getUser()
        .then(() =>{
          if(this.props.isAuthenticated){
            this.props.getLikes();
          }
        });
      }  
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
        <Navbar />
        <div className="main-container">
          <div className="grid"><Discounts /></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  fetchDiscounts: () => dispatch(fetchDiscounts()),
  fetchTimeSlot: time => dispatch(fetchTimeSlot(time)),
  onTryAutoSignup: () => dispatch(authActions.authCheckState()),
  getLikes: () => dispatch(fetchFavorites())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
