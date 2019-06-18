import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Discount from "../components/Discount";
import DiscountDetails from '../components/DiscountDetails';
import LightBox from '../components/LightBox';
import { connect } from "react-redux";
import {
  fetchDiscounts,
  addFoodCategory,
  addTimeSlot,
  handleSearchButtonClick,
  fetchTimeSlot,
  addedToFavorites
} from "../actions/discountActions";
class Home extends Component {

  state = {
    isOpenModal: false,
  };
  
handleModalToggle = () => {
    this.setState( prevState => ({isOpenModal: !prevState.isOpenModal}));
  };

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

  filterDiscounts = () => {
    const { discounts } = this.props;
    const { foodCategory, timeSlot } = this.props;
    let discountCopy = [...discounts];

    if (foodCategory && foodCategory !== "null")
      discountCopy = discountCopy.filter(
        discount => discount.category === foodCategory
      );
    if (timeSlot && timeSlot !== "null")
      discountCopy = discountCopy.filter(
        discount => discount.time === timeSlot
      );

      
    return discountCopy.map(discount => (
      <LightBox  isOpen={this.state.isOpenModal} handleModalToggle={this.handleModalToggle}
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
            image={discount.image} />
      </LightBox>
    ));
  };

  render() {
    return (
      <div>
        <Navbar
          timeSlot={this.props.timeSlot}
          handleFoodChange={this.props.handleFoodChange}
          handleTimeChange={this.props.handleTimeChange}
          handleSearchButtonClick={this.props.handleSearchButtonClick}
          
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
  likes: state.discounts.favorites,
});

const mapDispatchToProps = dispatch => ({
  handleFoodChange: event => dispatch(addFoodCategory(event)),
  handleTimeChange: event => dispatch(addTimeSlot(event)),
  fetchDiscounts: () => dispatch(fetchDiscounts()),
  handleSearchButtonClick: (food, time) =>
    dispatch(handleSearchButtonClick(food, time)),
  fetchTimeSlot: time => dispatch(fetchTimeSlot(time)),
  onAddedToLikes: (id) => dispatch(addedToFavorites(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
