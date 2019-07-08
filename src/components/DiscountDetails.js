import React from 'react'
import '../assets/css/discount-details.css'
import coupon from '../assets/img/voucher.png'
import {Link} from 'react-router-dom'
class DiscountDetails extends React.Component {

    render(){
        const LikeButton = () => {
            if(this.props.isAuthenticated){
                var like = this.props.likes.filter(l => l.discount.title === this.props.title)[0];
                
                if(like){
                   return(
                    <button className="btn-like bg-grey" onClick={() => this.props.onDeleteLike(like.id)} >Unlike</button>
                   )
                }
                return(
                    <button className="btn-like" onClick={this.props.onAddedToLikes}> Like </button>
                )
            }
        }
        return (
            <div className="discount">
                <div className="image-container">
                    <img className="img1" src={this.props.image} alt=""/>
                </div>

                <div className="cafe">
                    <h2>{this.props.cafe}</h2>
                </div>
                <div className="description">
                    <div className="title">
                        <img src={coupon} alt="coupon"/>
                    <h3>{this.props.title}</h3>
                    </div>

                    <div className="details">
                        <p>{this.props.details}
                        </p>
                    </div>

                    <div className="map-container">
                        <Link className="btn" to={`/map?address=${this.props.address}&cafe=${this.props.cafe}`} target="_blank" />
                        <p>{this.props.address}</p>
                    </div>
                </div>
                {LikeButton()}
            </div>
        )
    }
}

export default DiscountDetails;
