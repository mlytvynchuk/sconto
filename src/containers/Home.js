import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Discount from "../components/Discount";
import { connect } from "react-redux";
import { fetchDiscounts, addFoodCategory, addTimeSlot } from "../actions/discountActions";
class Home extends Component {
    componentDidMount(){
    this.props.fetchDiscounts();
  }
  
  displayAllDiscounts = () =>  
    this.props.discounts.map(discount => 
    <Discount key={discount.id} title={discount.title} details={discount.details} overlay={discount.overlay} cafe={discount.cafe} image={discount.image} height={discount.height}/>);
  
  filterDiscounts = () => {
    const { discounts } = this.props;
    const {foodCategory, timeSlot} = this.props;
    let discountCopy = [...discounts]; 
    if(foodCategory)
      discountCopy = discountCopy.filter((discount) =>  discount.category === foodCategory);
    if(timeSlot)
      discountCopy = discountCopy.filter((discount) =>  discount.time === timeSlot);
    
    return discountCopy
      .map(discount => <Discount key={discount.id} title={discount.title} details={discount.details} overlay={discount.overlay} cafe={discount.cafe} image={discount.image} height={discount.height}/>);

  }

  render() {
    const { foodCategory, timeSlot } = this.props;
    return (
      <div>
        <Navbar handleFoodChange={this.props.handleFoodChange} handleTimeChange={this.props.handleTimeChange} />
        <div className="main-container">
          <div className="grid">
           {foodCategory || timeSlot ? this.filterDiscounts() : this.displayAllDiscounts()}
           
          </div>
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
  timeSlot: state.discounts.timeSlot
})

const mapDispatchToProps = dispatch => ({
  handleFoodChange: (event) => dispatch(addFoodCategory(event)),
  handleTimeChange: (event) => dispatch(addTimeSlot(event)),
  fetchDiscounts: () => dispatch(fetchDiscounts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
