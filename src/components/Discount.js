import React, { Component } from "react";
import { directive } from "@babel/types";

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
    const {title, details, image, cafe, overlay} = this.state;
    return (
      <div>
        <div className="grid-item white-color height320" style={{background: `url(${image})`}}>
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
