import React, { Component } from "react";
import { directive } from "@babel/types";

export default class Discount extends Component {
  state = {
    discount: "",
    cafe: "",
    height: "",
    image: null,
    overlay: "dark"
  };
  render() {
    return (
      <div>
        <div className="grid-item white-color height320">
          <div className="overlay-dark">
            <div className="discountCard">
              <h3 className="discountTitle">Піца від 30 грн</h3>
              <div className="discountCafe">Сіли з'їли</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
