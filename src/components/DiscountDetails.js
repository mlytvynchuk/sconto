import React from 'react'
import '../assets/css/discount-details.css'
import loc from '../assets/img/loc.png'
import coupon from '../assets/img/disc.png'

const DiscountDetails = (props) => {
    
    return (
        <div>
            <div className="image-container">
                <img style={{background: "linear-gradient(to top, #E4AF9D 20%, #E4E4D8 50%, #A19887 80%)"}} src={props.image} alt=""/>
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
