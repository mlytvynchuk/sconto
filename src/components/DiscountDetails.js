import React from 'react'
import '../assets/css/discount-details.css'
import loc from '../assets/img/loc.png'
import coupon from '../assets/img/disc.png'
import grad from '../assets/img/top.png'

const DiscountDetails = (props) => {
    
    return (
        <div>
            <div className="image-container">
                <img className="img1" src={props.image} alt=""/>
                <img className="img2" src={grad} alt="gradient"/>
            </div>

            <div className="cafe">
                <h2>{props.cafe}</h2>
            </div>
            <div className="description">
                <div className="title">
                    <img src={coupon} alt="coupon"/>
                  <h3>{props.title}</h3>
                </div>

                <div className="details">
                    <h3>Детальна інформація</h3>
                    <p>{props.details}</p>
                </div>

                <div className="map-container">
                    <img src={loc} alt="loc" />
                    <p>{props.location}</p>
                </div>
            </div>
                <button className="btn-like" onClick={props.onAddedToLikes}> Like </button>
        </div>
    )
}

export default DiscountDetails;
