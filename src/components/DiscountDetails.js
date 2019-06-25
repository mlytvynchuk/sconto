import React from 'react'
import '../assets/css/discount-details.css'
import coupon from '../assets/img/voucher.png'
import {Link} from 'react-router-dom'
import { MapContainer } from './MapContainer';
class DiscountDetails extends React.Component {

    raiseInvoiceClicked(){
        const url = 'http://localhost:3000/map';
        window.open(url, '_blank');
    }

    render(){
        const LikeButton = () => {
            if(this.props.isAuthenticated){
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
                        <p>Lorem ipsum bibendum porta donec metus sit risus nulla nec orci sagittis nibh adipiscing nam. Lectus non, rutrum ut leo urna enim proin sem nibh, urna.
                        </p>
                    </div>

                    <div className="map-container">
                        <Link to={{pathname: '/map/',
                            state: {
                                location: this.props.location,
                                cafe: this.props.cafe
                            }
                        }}>
                        <button className="btn"> </button></Link>   
                        <p>{this.props.location}</p>
                    </div>
                </div>
                {LikeButton()}
            </div>
        )
    }
}

export default DiscountDetails;
