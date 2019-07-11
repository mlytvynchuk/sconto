import React, { Component } from 'react';
import { connect } from "react-redux";
import Discount from "./Discount";
import DiscountDetails from './DiscountDetails';
import LightBox1 from './LightBox1';
import { addedToFavorites } from "../actions/discountActions";
import * as settings from '../settings'
import LoadingSpinner from "./LoadingSpinner";

class Discounts extends Component {
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
            <DiscountDetails 
                onAddedToLikes={() => this.props.onAddedToLikes(discount.id)}
                id={discount.id} 
                title={discount.title} 
                details={discount.details} 
                cafe={discount.cafe} 
                image={settings.DOMAIN + discount.image}
                address={discount.location} />
          </LightBox1>
        ));
      };
      render() {
        const { loading } = this.props;
        if(loading)
          return <LoadingSpinner loading={loading} />
          
        return (
            <>
                { this.filterDiscounts() }
            </>
        );
      }
};

const mapStateToProps = state => ({
    loading: state.discounts.loading,
    discounts: state.discounts.discounts,
    foodCategory: state.discounts.foodCategory,
    timeSlot: state.discounts.timeSlot,
    search: state.discounts.search,
  });
  
  const mapDispatchToProps = dispatch => ({   
    onAddedToLikes: (id) => dispatch(addedToFavorites(id)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Discounts);
