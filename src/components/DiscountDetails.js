import React from 'react'

const DiscountDetails = ({title}) => {
    return (
        <div>
            <div className="image-container">
                <img src={props.image} alt={props.alt}/>
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
