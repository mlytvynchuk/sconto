import React, { Component } from "react";
import manPhoto from '../assets/img/man.png';
import userPhoto from '../assets/img/user.png';
import LightBox from './LightBox';
import FilterMenu from './FilterMenu';
import AddDisc from './AddDisc';
import LikesList from './LikesList';
import '../assets/css/modal.css';
export default class Navbar extends Component {
  state = {
    isOpenModal: false,
  };
  
  handleModalToggle = () => {
    this.setState( prevState => ({isOpenModal: !prevState.isOpenModal}));
  };

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
            <LightBox isOpen={this.state.isOpenModal} handleModalToggle={this.handleModalToggle}
              button={(
                  <div className="navbar-toggler" >
                    <span className="navbar-toggler-text">Фільтри</span>
                    <span className="navbar-toggler-icon" />
                  </div>
              )}>
                    <FilterMenu 
                      timeSlot={this.props.timeSlot} 
                      handleSearchButtonClick={this.props.handleSearchButtonClick} 
                      handleModalToggle={this.handleModalToggle} />
              </LightBox>
              
              {/* user profile */}
              <div className="profile">
                <ul id="menu">
                  <li>
                    <input type="checkbox" id="user-photo" />
                    <img src={userPhoto} id="profile-img" alt=""/>
                    <ul className="but-style">
                      <li>
                        <img src={manPhoto} className="profile-img" alt=""/>
                      </li>
                      <li>
                        <div className="blur-box">
                        <LightBox
                            button={(<div className="navbar-brand">
                              <span className="navbar-toggler-text">Вподобання</span>
                              </div>
                            )}>
                            <LikesList />
                          </LightBox>                           

                        </div>
                      </li>
                      <li>
                        <div className="blur-box">
                        <LightBox
                            button={(<div className="navbar-brand">
                              <span className="navbar-toggler-text">Додати</span>
                              </div>
                            )}>
                            <AddDisc />
                          </LightBox>   

                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        
      </header>
    );
  }
}
