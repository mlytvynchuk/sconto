import React, { Component } from 'react'
import AddDiscForm from './AddDiscForm';
import LightBox from './LightBox';
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
        
        <div className="blur-box">
            <LightBox isOpen={this.state.isOpenModal} handleModalToggle={this.handleModalToggle}
                button={(
                        <div className="navbar-brand" >
                            <span className="navbar-toggler-text">Додати</span>
                        </div>
                        )}>
                    <AddDiscForm />
            </LightBox> </div>
                      
    )}
}