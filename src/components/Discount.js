import React from "react";

const Discount = props => {
  const { title, image, cafe, overlay, height } = props;
  
  return (
    <div>
      <div
        style={{
          background: `url(${image}) center center no-repeat`,
          backgroundSize: "cover"
        }}
        className={`grid-item white-color height${height}`}
      >
        <div className={`overlay-${overlay}`}>
          <div className="discountCard">
            <h3 className="discountTitle">{title}</h3>
            <div className="discountCafe">{cafe}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
