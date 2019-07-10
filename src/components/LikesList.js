import React from 'react';
import { deleteFromLikes, fetchFavorites } from '../actions/discountActions'
import { connect } from "react-redux";
import LightBox1 from './LightBox1';
import DiscountDetails from './DiscountDetails';
import '../assets/css/likeList.css';
import '../assets/css/indent.css';
import * as settings from '../settings'
class LikesList extends React.Component{
    render(){
        return(
            
            <div className="like-list">
                <h1>Вподобання</h1>
                <div className="list-edit">
                {(this.props.likes.length > 0) ? this.props.likes.map((item) => 
                <li className="ticket" key={item.id}>
                    <div className="d-flex">
                        <div className="display-left">
                        <LightBox1 
                            button={ <h4>{item.discount.cafe}</h4> }>
                                {console.log(item)}
                            <DiscountDetails 
                                id={item.discount.id} 
                                title={item.discount.title} 
                                details={item.discount.details} 
                                cafe={item.discount.cafe} 
                                image={settings.DOMAIN + item.discount.image}
                                address={item.discount.location} />
                        </LightBox1> 
                        <p>{item.discount.location}</p> </div>
                        <div className="display-right"><img src={settings.DOMAIN + item.discount.image} alt=""/>
                        <button className="btn" onClick={()=>this.props.deleteFromLikes(item.id)}> </button> </div>
                    </div>
                </li>) : (<div className="text-center">Ви нічого ще не вподобали</div>)}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    likes: state.discounts.favorites
  });

 const mapDispatchToProps = dispatch => ({
     deleteFromLikes:(id) => dispatch(deleteFromLikes(id)),
     getLikes: () => dispatch(fetchFavorites())
 })
export default connect(mapStateToProps, mapDispatchToProps)(LikesList);