import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Discount from "../components/Discount";
import DiscountDetails from '../components/DiscountDetails';
import LightBox1 from '../components/LightBox1';
import { connect } from "react-redux";
import * as authActions from '../actions/authActions'
import * as settings from '../settings'
import {
  fetchDiscounts,
  addFoodCategory,
  addTimeSlot,
  handleSearchButtonClick,
  fetchTimeSlot,
  addedToFavorites,
  fetchFavorites,
  deleteFromLikes
} from "../actions/discountActions";
import { getUser } from "../actions/userActions";
import { setTimeout } from "timers";
class Home extends Component {
  componentDidUpdate(prevProps){
      if (JSON.stringify(this.props.likes) != JSON.stringify(prevProps.likes)){
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
            image={settings.DOMAIN + discount.image}
            height={discount.height}
          />}>
        <DiscountDetails {...this.props} onAddedToLikes={() => this.props.onAddedToLikes(discount.id)}
            id={discount.id} 
            title={discount.title} 
            details={discount.details} 
            cafe={discount.cafe} 
            image={settings.DOMAIN + discount.image}
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
  onAddedToLikes: (id) => dispatch(addedToFavorites(id)),
  onDeleteLike: (id) => dispatch(deleteFromLikes(id)),
  onTryAutoSignup: () => dispatch(authActions.authCheckState()),
  logout: () => dispatch(authActions.logout()),
  getLikes: () => dispatch(fetchFavorites())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
