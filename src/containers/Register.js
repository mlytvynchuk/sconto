import React, { Component } from 'react'
import '../assets/css/login.css';
class Login extends Component {
    render() {
        return (
           <div className="login-body">
                <div class="login-container">
        <div class="login-wrapper">
            <form action="" class="login-form">

                <div class="title-container">
                    <h2 class="title-text">
                                Створення користувача
                            </h2>
                </div>
                <div class="input-container">
                    <input type="text" class="input focus hover" placeholder="Ваш username" name="username" />
                </div>
                <div class="input-container">
                    <input type="text" class="input focus hover" placeholder="Ваше ім'я" name="name" />
                </div>
                <div class="input-container">
                    <input type="text" class="input focus hover" placeholder="Ваше Прізвище" name="lastname" />
                </div>
                <div class="input-container">
                    <input type="text" class="input focus hover" placeholder="Ваш email" name="email" />
                </div>
                <div class="input-container">
                    <input type="password" class="input focus hover" placeholder="Ваш пароль" name="password" />
                </div>

                <div class="button-container">
                    <input type="submit" class="button-submit " value="Увійти" />
                </div>

                <div class="text-container">
                    <span class="text-before-sign-up">
                                    Немає акаунту? 
                                    <a href="./signUpForm/signUpForm.html"> Зареєструватись</a>
                                </span>
                </div>

            </form>
        </div>

    </div>
           </div>
        )
    }
}
export default Login;
