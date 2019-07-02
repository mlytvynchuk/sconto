import React from "react";
import "../assets/css/discount-details.css";
import coupon from "../assets/img/voucher.png";
import { Link } from "react-router-dom";
import { addedToFavorites, deleteFromLikes } from "../actions/discountActions";
import { connect } from "react-redux";

class DiscountDetails extends React.Component {
  raiseInvoiceClicked() {
    const url = "http://localhost:3000/map";
    window.open(url, "_blank");
  }

  render() {
    const {
      isAuthenticated,
      onDeleteLike,
      onAddedToLikes,
      title,
      likes,
      image,
      cafe,
      location
    } = this.props;
    const LikeButton = () => {
      if (isAuthenticated) {
        const like = likes.filter(l => l.discount.title === title)[0];

        if (like) {
          return (
            <button
              className="btn-like bg-grey"
              onClick={() => onDeleteLike(like.id)}
            >
              Unlike
            </button>
          );
        }
        return (
          <button className="btn-like" onClick={onAddedToLikes}>
            Like
          </button>
        );
      }
    };
    return (
      <div className="discount">
        <div className="image-container">
          <img className="img1" src={image} alt="" />
        </div>

        <div className="cafe">
          <h2>{cafe}</h2>
        </div>
        <div className="description">
          <div className="title">
            <img src={coupon} alt="coupon" />
            <h3>{title}</h3>
          </div>

          <div className="details">
            <p>
              Lorem ipsum bibendum porta donec metus sit risus nulla nec orci
              sagittis nibh adipiscing nam. Lectus non, rutrum ut leo urna enim
              proin sem nibh, urna.
            </p>
          </div>

          <div className="map-container">
            <Link
              to={{
                pathname: "/map/",
                state: {
                  location: location,
                  cafe: cafe
                }
              }}
            >
              <button className="btn"> </button>
            </Link>
            <p>{location}</p>
          </div>
        </div>
        {LikeButton()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  likes: state.discounts.favorites,
  isAuthenticated: state.auth.token !== null
});

const mapDispatchToProps = dispatch => ({
  // onAddedToLikes: (id) => dispatch(addedToFavorites(id)),
  onDeleteLike: id => dispatch(deleteFromLikes(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscountDetails);
