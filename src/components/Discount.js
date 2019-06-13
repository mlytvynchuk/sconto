import React, { Component } from "react";


export default class Discount extends Component {
  state = {
    title: this.props.title,
    details: this.props.details,
    cafe: this.props.cafe,
    height: this.props.height,
    image: this.props.image,
    overlay: this.props.overlay
  };
  render() {
    const {title, image, cafe, overlay,height} = this.state;
    return (
      <div>
       {console.log(image)}
        <div style={{background: `url(${image}) center center no-repeat`,backgroundSize: 'cover', }} className={`grid-item white-color height${height}`}>
          <div className={`overlay-${overlay}`}>
            <div className="discountCard">
              <h3 className="discountTitle">{title}</h3>
              <div className="discountCafe">{cafe}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
