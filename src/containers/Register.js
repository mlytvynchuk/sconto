import React, { Component } from 'react'
import '../assets/css/login.css';
import { authLogin } from '../actions/authActions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import * as actions from "../actions/authActions"
class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    handleInput(e){
        this.setState({
            [e.target.name]: String([e.target.value])
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const {email, password} = this.state;
        console.log(email,password);
        this.props.onAuth(email, password);
        if(!this.props.error){
            this.props.history.push('/login/');
        }
    }
    render() {
        let errorMessage = null;
        if(this.props.error){
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }
        return (
            <div className="login-body">
               
                    <div className="login-container">
        <div className="login-wrapper">
            <form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>

                <div className="title-container">
                    <h2 className="title-text">
                                Реєстрація
                            </h2>
                </div>

                <div className="input-container">
                    <input type="text" className="input focus hover" placeholder="Ваш email" name="email" onChange={(e) => this.handleInput(e)} />
                </div>
                <div className="input-container">
                    <input type="password" className="input focus hover" placeholder="Ваш пароль" name="password" onChange={(e) => this.handleInput(e)} />
                </div>

                <div className="button-container">
                    <input type="submit" className="button-submit " value="Зареєструватись" onClick={(e) => this.handleSubmit(e)} />
                </div>

                <div className="text-container">
                    <span className="text-before-sign-up">
                                    Маєш аккаунт? 
                                    <Link to="/login/"> Увійти</Link>
                                </span>
                </div>

            </form>
        </div>

    </div>
            </div>
            
        )
    }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.token !==null,
    error: state.auth.error,
    loading: state.auth.loading,
})
 const mapDispatchToProps = (dispatch) => ({
     onAuth: (email, password) => dispatch(actions.authSignup(email,password))
 })   

export default connect(mapStateToProps, mapDispatchToProps)(Login);
