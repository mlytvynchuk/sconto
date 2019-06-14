import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Discount from "../components/Discount";
import { connect } from "react-redux";
import { fetchDiscounts } from "../actions/discountActions";
class Home extends Component {
  state={
    foodCategory: null,
    timeSlot: null,
  }
    componentDidMount(){
    this.props.dispatch(fetchDiscounts());

  }
  handleFoodChange = event => this.setState({foodCategory: event.target.value });
  
  
  handleTimeChange = event => this.setState({timeSlot: event.target.value});
  
  displayAllDiscounts = () =>  
    this.props.discounts.map(discount => 
    <Discount key={discount.id} title={discount.title} details={discount.details} overlay={discount.overlay} cafe={discount.cafe} image={discount.image} height={discount.height}/>)
    

  filterDiscounts = () => {
    const { discounts } = this.props;
    const {foodCategory, timeSlot} = this.state;
    let discountCopy = [...discounts]; 
    if(foodCategory)
      discountCopy = discountCopy.filter((discount) =>  discount.category === foodCategory);
    if(timeSlot)
      discountCopy = discountCopy.filter((discount) =>  discount.time === timeSlot);
    
    return discountCopy
      .map(discount => <Discount key={discount.id} title={discount.title} details={discount.details} overlay={discount.overlay} cafe={discount.cafe} image={discount.image} height={discount.height}/>);

  }




  render() {
    const { foodCategory, timeSlot } = this.state;
    return (
      <div>
        <Navbar handleFoodChange={this.handleFoodChange} handleTimeChange={this.handleTimeChange} />
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
export default connect(mapStateToProps)(Home);
