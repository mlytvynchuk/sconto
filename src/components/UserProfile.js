import React, { Component } from 'react'
import AddDisc from './AddDisc';
import LikesList from './LikesList';
import LightBox from './LightBox';
import manPhoto from '../assets/img/man.png';
import userPhoto from '../assets/img/user.png';
import '../assets/css/modal.css';
import '../assets/css/menu.css';
 
export default class Navbar extends Component {
    state = {
      isOpenModal: false,
    };
    
    handleModalToggle = () => {
      this.setState( prevState => ({isOpenModal: !prevState.isOpenModal}));
    };

    render() {
    return (
        <div className="profile">
                <ul id="menu">
                  <li>
                    <input type="checkbox" id="user-photo" />
                    <img src={userPhoto} id="profile-img" alt="UserPhoto" />
                    <ul className="but-style">
                      <li>
                        <img src={manPhoto} className="profile-img" alt="UserPhoto"/>
                      </li>
                      <li>
                      <div className="blur-box">
                            <LightBox isOpen={this.state.isOpenModal} handleModalToggle={this.handleModalToggle}
                            button={(
                                <div className="navbar-brand" >
                                    <span className="navbar-toggler-text">Вподобання</span>
                                </div>
                            )}>
                                    <LikesList addedToLikeList={this.addedToLikeList}/>
                            </LightBox> </div>
                      </li>
                      <li>
                        <AddDisc />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
    )}
}
