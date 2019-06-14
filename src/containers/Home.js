import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Discount from "../components/Discount";
import { connect } from "react-redux";
import { fetchDiscounts, addFoodCategory, addTimeSlot, handleSearchButtonClick, fetchTimeSlot} from "../actions/discountActions";
class Home extends Component {
 
    componentDidMount(){
      this.props.fetchDiscounts();
      this.getTime();
  }
  getTime = () =>{
    var today = new Date();
    var hours = today.getHours();
    if (hours < 12){
      this.props.fetchTimeSlot("Сніданок");
      
    }
    else if (hours < 18){
      this.props.fetchTimeSlot("Обід");
      
    }
    else{
      this.props.fetchTimeSlot("Вечеря");
      
    }  
}
  
  filterDiscounts = () => {
    
    console.log(this.props.timeSlot);
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
    return (
      <div>
        <Navbar timeSlot={this.props.timeSlot} handleFoodChange={this.props.handleFoodChange} handleTimeChange={this.props.handleTimeChange} handleSearchButtonClick={this.props.handleSearchButtonClick} />
        <div className="main-container">
          <div className="grid">
           {this.filterDiscounts()}
           
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
  handleSearchButtonClick: (food, time) => dispatch(handleSearchButtonClick(food, time)),
  fetchTimeSlot: (time) => dispatch(fetchTimeSlot(time))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
