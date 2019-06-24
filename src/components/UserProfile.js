import React, { Component } from 'react'
import AddDiscForm from './AddDiscForm';
import LikesList from './LikesList';
import LightBox1 from './LightBox1';
import manPhoto from '../assets/img/man.png';
import userPhoto from '../assets/img/user.png';
import '../assets/css/modal.css';
import '../assets/css/menu.css';

export default class Navbar extends Component {
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
                            <LightBox1
                            button={(
                                <div className="navbar-brand" >
                                    <span className="navbar-toggler-text">Вподобання</span>
                                </div>
                            )}>
                                    <LikesList />
                            </LightBox1> </div>
                      </li>
                      <li>
                      <div className="blur-box">
                        <LightBox1 
                            button={(
                                    <div className="navbar-brand" >
                                        <span className="navbar-toggler-text">Додати</span>
                                    </div>
                                    )}>
                                <AddDiscForm />
                        </LightBox1> </div>
                      </li>
                      <li>
                      <div onClick={() => this.props.logout()} className="navbar-brand" >
                            <span className="navbar-toggler-text c-pointer">Вийти</span>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
    )}
}
