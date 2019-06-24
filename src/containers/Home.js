import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Discount from "../components/Discount";
import DiscountDetails from '../components/DiscountDetails';
import LightBox1 from '../components/LightBox1';
import { connect } from "react-redux";
import * as authActions from '../actions/authActions'

import {
  fetchDiscounts,
  addFoodCategory,
  addTimeSlot,
  handleSearchButtonClick,
  fetchTimeSlot,
  addedToFavorites
} from "../actions/discountActions";
class Home extends Component {
  componentDidMount() {
    this.props.fetchDiscounts();
    this.getTime();
  }

  getTime = () => {
    var today = new Date();
    var hours = today.getHours();
    if (hours < 12) {
      this.props.fetchTimeSlot("Сніданок");
    } else if (hours < 18) {
      this.props.fetchTimeSlot("Обід");
    } else {
      this.props.fetchTimeSlot("Вечеря");
    }
  };

  searchDiscounts = () => {
    const { search, discounts } = this.props;
    const searchToLower = search.toLowerCase();

    return discounts.filter(
      discount =>
        discount.cafe.toLowerCase().indexOf(searchToLower) !== -1 ||
        discount.title.toLowerCase().indexOf(searchToLower) !== -1
    );
  };

  filterDiscounts = () => {
    const { foodCategory, timeSlot } = this.props;
    let discounts = [...this.searchDiscounts()];

    if (foodCategory && foodCategory !== "null")
    discounts = discounts.filter(
        discount => discount.category === foodCategory
      );
    if (timeSlot && timeSlot !== "null")
    discounts = discounts.filter(
        discount => discount.time === timeSlot
      );
    
    return discounts.map(discount => (
      <LightBox1 
        key={discount.id}
        button={
          <Discount
            key={discount.id}
            title={discount.title}
            details={discount.details}
            overlay={discount.overlay}
            cafe={discount.cafe}
            image={discount.image}
            height={discount.height}
          />}>
        <DiscountDetails onAddedToLikes={() => this.props.onAddedToLikes(discount.id)}
            id={discount.id} 
            title={discount.title} 
            details={discount.details} 
            cafe={discount.cafe} 
            image={discount.image}
            location={discount.location} />
      </LightBox1>
    ));
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
          <div className="grid">{this.filterDiscounts()}</div>
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
  likes: state.discounts.favorites,
  search: state.discounts.search,
});

const mapDispatchToProps = dispatch => ({
  handleFoodChange: event => dispatch(addFoodCategory(event)),
  handleTimeChange: event => dispatch(addTimeSlot(event)),
  fetchDiscounts: () => dispatch(fetchDiscounts()),
  handleSearchButtonClick: (search, food, time) =>
  dispatch(handleSearchButtonClick(search, food, time)),
  fetchTimeSlot: time => dispatch(fetchTimeSlot(time)),
  onAddedToLikes: (id) => dispatch(addedToFavorites(id)),
  onTryAutoSignup: () => dispatch(authActions.authCheckState()),
  logout: () => dispatch(authActions.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
