import React, { Component } from "react";
import LightBox1 from './LightBox1';
import FilterMenu from './FilterMenu';
import UserProfile from './UserProfile';
import '../assets/css/modal.css';
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
  
  loginHandlers = () => {
    if (!this.props.isAuthenticated){
      return(
        <Link to='/login/'>Увійти</Link>
      )
    }else{
      return(
        <React.Fragment>
        <UserProfile {...this.props} />
        
      </React.Fragment>
      )
    }
  }
  render() {
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
                <select onChange={this.props.handleFoodChange}>
                  <option defaultValue="null" >
                    Обери смаколики
                  </option>
                  <option value={"Фастфуд"}>Фастфуд</option>
                  <option value={"Українська кухня"}>Українська кухня</option>
                  <option value={"Кава"}>Кава</option>
                </select>
              </li>
              <li className="filter-item">
                <h5>Час доби</h5>
                <select defaultValue={this.props.timeSlot} onChange={this.props.handleTimeChange}>
                  <option value="null">
                    
                    Обери час
                  </option>
                  <option value={"Сніданок"}>Сніданок</option>
                  <option value={"Обід"}>Обід</option>
                  <option value={"Вечеря"}>Вечеря</option>
                </select>
              </li>
            </ul>
            <div className="search-container">
              <form >
                <input
                  className="search-input"
                  type="text"
                  placeholder="Нажми й шукай"
                  name="search"
                />
                <button className="search-button" type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <LightBox1 
                button={(
                    <div className="navbar-toggler" >
                      <span className="navbar-toggler-text">Фільтри</span>
                      <span className="navbar-toggler-icon" />
                    </div>
                )}>
                      <FilterMenu 
                        timeSlot={this.props.timeSlot} 
                        handleSearchButtonClick={this.props.handleSearchButtonClick} />
                </LightBox1>
                {this.loginHandlers()}
              </div>
          </div>
        </nav>
        
      </header>
    );
  }
}
