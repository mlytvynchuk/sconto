import React, { Component } from "react";
import LightBox1 from "./LightBox1";
import FilterMenu from "./FilterMenu";
import UserProfile from "./UserProfile";
import "../assets/css/modal.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addFoodCategory,
  addTimeSlot,
  handleSearchButtonClick
} from "../actions/discountActions";
import { fetchTime, } from "../actions/filtersActions";

class Navbar extends Component {
  state = {
    search: ""
  };
  
  componentDidMount() {
    this.props.fetchTime()
  }

  handleSearchInput = e => {
    this.setState({ search: e.target.value });
  };

  loginHandlers = () => {
    if (!this.props.isAuthenticated) {
      return <Link to="/login/">Увійти</Link>;
    } else {
      return (
        <>
          <UserProfile />
        </>
      );
    }
  };

  renderOptions = (firstStatement, optionsList )=> {
    return (
      <>
        <option value="null">{ firstStatement }</option>
        {optionsList.map(el => <option key={el.id} value={el.name}>{el.name}</option>)}
      </>
    );
  }

  render() {
    const { foodCategory, timeSlot, handleTimeChange, handleFoodChange, handleSearchButtonClick } = this.props;
    const { search } = this.state;
    if(this.props.times.length > 0)
      console.log(typeof this.props.times[0].id);

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="blur-box">
            <a className="navbar-brand" href="/">
              Sconto
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="filter-item">
                <h4>Їжа</h4>
                <select onChange={handleFoodChange} value={foodCategory}>
                  <option value="null">Обери смаколики</option>
                  <option value="ФастФуд">ФастФуд</option>
                  <option value="Українська кухня">Українська кухня</option>
                  <option value="Кава">Кава</option>
                </select>
              </li>
              <li className="filter-item">
                <h4>Час доби</h4>
                <select value={timeSlot} onChange={handleTimeChange}>
                  {
                    this.renderOptions("Обери час", this.props.times)
                  }
                </select>
              </li>
            </ul>
            <div className="search-container">
              <input
                className="search-input"
                type="text"
                placeholder="Нажми й шукай"
                name="search"
                value={search}
                onChange={e => {
                  this.handleSearchInput(e);
                }}
              />
              <button
                className="search-button"
                onClick={event => {
                  handleSearchButtonClick(search, foodCategory, timeSlot);
                  event.preventDefault();
                }}
              >
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <LightBox1
                button={
                  <div className="navbar-toggler">
                    <span className="navbar-toggler-text">Фільтри</span>
                    <span className="navbar-toggler-icon" />
                  </div>
                }
              >
                <FilterMenu
                  handleSearchInput={this.handleSearchInput}
                  renderOptions={this.renderOptions}
                />
              </LightBox1>
              {this.loginHandlers()}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  foodCategory: state.discounts.foodCategory,
  timeSlot: state.discounts.timeSlot,
  isAuthenticated: state.auth.token !== null,
  times: state.filters.times,
});

const mapDispatchToProps = dispatch => ({
  handleFoodChange: event => dispatch(addFoodCategory(event)),
  handleTimeChange: event => dispatch(addTimeSlot(event)),
  handleSearchButtonClick: (search, food, time) =>
    dispatch(handleSearchButtonClick(search, food, time)),
  fetchTime: () => dispatch(fetchTime()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

