import React from 'react'
import '../assets/css/discount-details.css'
import coupon from '../assets/img/voucher.png'
import {Link} from 'react-router-dom'
import { deleteFromLikes } from "../actions/discountActions";
import { connect } from "react-redux";

class DiscountDetails extends React.Component {
    render(){
        const { isAuthenticated, onDeleteLike, onAddedToLikes, title, likes, image, cafe, address, details } = this.props;
      
        const LikeButton = () => {
            if(isAuthenticated){
                var like = likes.filter(l => l.discount.title === title)[0];        
                if(like){
                   return(
                    <button className="btn-like bg-grey" onClick={() => onDeleteLike(like.id)} >Unlike</button>
                   )
                }
                return(
                    <button className="btn-like" onClick={ onAddedToLikes }> Like </button>
                )
            }
        }
        return (
          <div className="discount">
            <div className="image-container">
              <img className="img1" src={image} alt="" />
            </div>

            <div className="cafe">
              <h2>{cafe}</h2>
            </div>
            <div className="description">
              <div className="title">
                <img src={coupon} alt="coupon" />
                <h3>{title}</h3>
              </div>

              <div className="details">
                <p>{details}</p>
              </div>

              <div className="map-container">
                <Link
                  className="btn"
                  to={`/map?address=${address}&cafe=${
                    cafe
                  }`}
                  target="_blank"
                />
                <p>{address}</p>
              </div>
            </div>
            {LikeButton()}
          </div>
        );
    }
}

const mapStateToProps = state => ({
    likes: state.discounts.favorites,
    isAuthenticated: state.auth.token !== null
  });
  
  const mapDispatchToProps = dispatch => ({
    onDeleteLike: id => dispatch(deleteFromLikes(id))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DiscountDetails);
  
