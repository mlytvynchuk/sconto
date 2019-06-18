import React from 'react'

const DiscountDetails = (props) => {
    
    return (
        <div>
            <div className="image-container">
                <img style = {{width:"100%"}} src={props.image} alt=""/>
            </div>
            <div className="cafe">
                <h2>{props.cafe}</h2>
                <button> Like </button>
            </div>
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <div>
                <h3>Детальна інформація</h3>
                <div className="details">
                    {props.details}
                </div>
                <div className="map-container">
                    Here will be map
                </div>
            </div>
        </div>
    )
}

export default DiscountDetails;
