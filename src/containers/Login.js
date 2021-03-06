import React, { Component } from "react";
import "../assets/css/login.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as actions from "../actions/authActions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    redirect: false,
    isValidLogin: true,
    isValidPassword: true,
    touched: {
      email: false,
      password: false,
    },
  };

  handleInput(e) {
    this.setState({
      [e.target.name]: String([e.target.value]),
    });
  }

  isValidEmail() {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim;
    const isEmail = this.state.email.match(emailRegex);

    if (isEmail) this.setState({ isValidLogin: true });
    else this.setState({ isValidLogin: false });
  }

  isValidPassword() {
    if (this.state.password.length > 0)
      this.setState({ isValidPassword: true });
    else this.setState({ isValidPassword: false });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;
    this.props.onAuth(email, password).then(() => {
      if (!this.props.error) {
        this.setState({
          redirect: true,
        });
      }
    });
  }

  handleBlur(field) {
    if (field === "email") this.isValidEmail();
    else if (field === "password") this.isValidPassword();

    this.setState({ touched: { ...this.state.touched, [field]: true } });
  }

  addClassNameToField(field) {
    if (field === "email" && !this.state.isValidLogin) return " invalid-data";
    else if (field === "password" && !this.state.isValidPassword)
      return " invalid-data";

    return "";
  }

  render() {
    const { error } = this.props;

    const RedirectToMain = () => {
      if (this.state.redirect) {
        return <Redirect to="/" />;
      }
      return null;
    };

    return (
      <div className="login-body">
        <div className="login-container">
          <div className="login-wrapper">
            <RedirectToMain />
            <form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>
              <div className="title-container">
                <h2 className="title-text">Вхід у кабінет</h2>
              </div>
              {error ? (
                <div className="error-message">
                  <span className="login-error-message">
                    Помилка логінізації. Неправильно введено логін або пароль
                  </span>
                </div>
              ) : null}

              <div className="input-container">
                <input
                  type="email"
                  className={`input focus ${this.addClassNameToField("email")}`}
                  required
                  placeholder="Ваш email"
                  name="email"
                  onChange={(e) => this.handleInput(e)}
                  onBlur={() => this.handleBlur("email")}
                />
              </div>
              <div className="input-container">
                <input
                  type="password"
                  className={`input focus ${this.addClassNameToField(
                    "password"
                  )}`}
                  placeholder="Ваш пароль"
                  required
                  name="password"
                  onChange={(e) => this.handleInput(e)}
                  onBlur={() => this.handleBlur("password")}
                />
              </div>

              <div className="button-container">
                <input
                  type="submit"
                  className="button-submit hover "
                  value="Увійти"
                  onClick={(e) => this.handleSubmit(e)}
                />
              </div>

              <div className="text-container">
                <span className="text-before-sign-up">
                  Немає акаунту?
                  <Link to="/register/"> Зареєструватись</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token != null,
  error: state.auth.error,
  loading: state.auth.loading,
});
const mapDispatchToProps = (dispatch) => ({
  onAuth: (email, password) => dispatch(actions.authLogin(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
