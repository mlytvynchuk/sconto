import React, { Component } from "react";
import LightBox1 from './LightBox1';
import FilterMenu from './FilterMenu';
import UserProfile from './UserProfile';
import '../assets/css/modal.css';
import {Link} from 'react-router-dom';
class Navbar extends Component {
  state = {
    search: "",
  }

  handleSearchInput = e => {
    this.setState({search: e.target.value});
  }
  
  loginHandlers = () => {
    if (!this.props.isAuthenticated){
      return(
        <Link to='/login/'>Увійти</Link>
      )
    }else{
      return(
        <React.Fragment>
        <UserProfile />
        
      </React.Fragment>
      )
    }
  };

  render() {
    const { foodCategory, timeSlot, handleTimeChange, handleFoodChange, handleSearchButtonClick } = this.props;
    const { search } = this.state;

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
                  <option value="null" >
                    Обери смаколики
                  </option>
                  <option value="ФастФуд">ФастФуд</option>
                  <option value="Українська кухня">Українська кухня</option>
                  <option value="Кава">Кава</option>
                </select>
              </li>
              <li className="filter-item">
                <h4>Час доби</h4>
                <select value={timeSlot} onChange={handleTimeChange}>
                  <option value="null">
                    
                    Обери час
                  </option>
                  <option value="Сніданок">Сніданок</option>
                  <option value="Обід">Обід</option>
                  <option value="Вечеря">Вечеря</option>
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
                  onChange={e => {this.handleSearchInput(e)}}
                />
                <button className="search-button" onClick={(event => {handleSearchButtonClick(search, foodCategory, timeSlot); event.preventDefault()})}>
                  <i className="fa fa-search" />
                </button>
              
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
                        handleSearchInput = {this.handleSearchInput}
                        handleSearchButtonClick={handleSearchButtonClick}
                        search={search}
                        foodCategory={foodCategory} />
                </LightBox1>
                {this.loginHandlers()}
              </div>
          </div>
        </nav>
        
      </header>
    );
  }
}
export default Navbar;
