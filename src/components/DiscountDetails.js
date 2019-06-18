import React from 'react'

const DiscountDetails = (props) => {
    
    return (
        <div>
            <div className="image-container">
                <img src={props.image} alt=""/>
            </div>
            <div className="cafe">
                <h2>{props.cafe}</h2>
            </div>
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <div>
                <button
                onClick={props.onAddedToLikes}>Likes</button>
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
