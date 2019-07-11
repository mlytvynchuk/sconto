import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import * as authActions from '../actions/authActions'
import {
  fetchDiscounts,
  fetchTimeSlot,
  fetchFavorites,
} from "../actions/discountActions";
import { setTimeout } from "timers";
import Discounts from "../components/DIscounts";
class Home extends Component {
  componentDidUpdate(prevProps){
      if (JSON.stringify(this.props.likes) !== JSON.stringify(prevProps.likes)){
          setTimeout(() => {
            this.props.getLikes();
          }, 500);
      }
      // if(JSON.stringify(this.props.discounts != JSON.stringify(prevProps.discounts))){
      //   setTimeout(() => {
      //     this.props.fetchDiscounts();
      //   }, 500);
      // }
  }
  // componentWillReceiveProps(nextProps){
  //   if (JSON.stringify(this.props.discounts) !== JSON.stringify(nextProps.discounts)){
  //     nextProps.fetchDiscounts();
  //   }
  // }

  componentDidMount() {
    var is_authenticated = this.props.onTryAutoSignup();
    if (is_authenticated){
      this.props.getLikes();
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
          <div className="grid">{<Discounts />}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timeSlot: state.discounts.timeSlot,
  likes: state.discounts.favorites,
});

const mapDispatchToProps = dispatch => ({
  fetchDiscounts: () => dispatch(fetchDiscounts()),
  fetchTimeSlot: time => dispatch(fetchTimeSlot(time)),
  onTryAutoSignup: () => dispatch(authActions.authCheckState()),
  getLikes: () => dispatch(fetchFavorites())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
