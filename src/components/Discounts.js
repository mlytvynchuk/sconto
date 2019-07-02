import React from 'react';
import { connect } from "react-redux";
import Discount from "./Discount";
import DiscountDetails from './DiscountDetails';
import LightBox1 from './LightBox1';
import { addedToFavorites, deleteFromLikes } from "../actions/discountActions";
import * as settings from '../settings'


const Discounts = (props) => {
    const searchDiscounts = () => {
        const { search, discounts } = props;
        const searchToLower = search.toLowerCase();
    
        return discounts.filter(
          discount =>
            discount.cafe.toLowerCase().indexOf(searchToLower) !== -1 ||
            discount.title.toLowerCase().indexOf(searchToLower) !== -1
        );
      };
    
    const filterDiscounts = () => {
        const { foodCategory, timeSlot } = props;
        let discounts = [...searchDiscounts()];
    
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
                onAddedToLikes={() => props.onAddedToLikes(discount.id)}
                id={discount.id} 
                title={discount.title} 
                details={discount.details} 
                cafe={discount.cafe} 
                image={settings.DOMAIN + discount.image}
                location={discount.location} />
          </LightBox1>
        ));
      };
    return (
        <>
            { filterDiscounts() }
        </>
    );
};

const mapStateToProps = state => ({
    discounts: state.discounts.discounts,
    foodCategory: state.discounts.foodCategory,
    timeSlot: state.discounts.timeSlot,
    search: state.discounts.search,
  });
  
  const mapDispatchToProps = dispatch => ({   
    onAddedToLikes: (id) => dispatch(addedToFavorites(id)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Discounts);
