import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div class="login-container">
        <div class="login-wrapper">
            <form action="" class="login-form">

                <div class="title-container">
                    <span class="title-text">
                                Вхід у кабінет
                            </span>
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
                                    <a href="./signUpForm/signUpForm.html">Зареєструватись</a>
                                </span>
                </div>

            </form>
        </div>

    </div>
        )
    }
}
export default Login;
