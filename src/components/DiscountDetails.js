import React from 'react'
import '../assets/css/discount-details.css'
import coupon from '../assets/img/disc.png'
import grad from '../assets/img/top.png'

class DiscountDetails extends React.Component {

    raiseInvoiceClicked(){
        const url = 'http://localhost:3000/map';
        window.open(url, '_blank');
    }

    render(){
        return (
            <div>
                <div className="image-container">
                    <img className="img1" src={this.props.image} alt=""/>
                    <img className="img2" src={grad} alt="gradient"/>
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
                        <h3>Детальна інформація</h3>
                        <p>{this.props.details}</p>
                    </div>

                    <div className="map-container">
                        <button className="btn" onClick={this.raiseInvoiceClicked}> </button>
                        <p>{this.props.location}</p>
                    </div>
                </div>
                    <button className="btn-like" onClick={this.props.onAddedToLikes}> Like </button>
            </div>
        )
    }
}

export default DiscountDetails;
