import React, { Component } from "react";
import { PostData } from "../services/PostData";
import { Redirect } from "react-router-dom";
import logo from "../images/Logo-Final.png";
import vector from "../images/vector.png";
import Footer from "./Footer";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false,
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    if (this.state.username && this.state.password) {
      PostData("login", this.state).then((result) => {
        let responseJSON = result;

        if (responseJSON.userData) {
          sessionStorage.setItem("userData", responseJSON);
          this.setState({ redirect: true });
        } else {
          document.getElementById("msg").style.visibility = "visible";
        }
      });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/home"} />;
    }
    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }

    return (
      <div>
        <div className="loginPage">
          <div className="nav">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="heading">
              <h2>Zealicon</h2>
            </div>
            <div className="signup">
              <a href="/signup">Sign up</a>
            </div>
          </div>

          <div className="loginBody">
            <img src={vector} alt="vector" />

            <div className="loginContainer">
              <div className="text">
                <h2>Log into your account</h2>
                <input
                  id="user"
                  name="username"
                  type="text"
                  onChange={this.onChange}
                  placeholder="Username / Email address"
                />
                <br />
                <input
                  id="pass"
                  name="password"
                  type="password"
                  data-type="password"
                  onChange={this.onChange}
                  placeholder="Password"
                />
                <p>Forgot password?</p>
                <button type="submit" value="Sign In" onClick={this.login}>
                  Login
                </button>
                <h3>
                  Don't have an account? <span> Sign Up</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div class="loginPage">
          <div class="loginnav">
            <p class="title">
              <a href="/">Plexus</a>
            </p>
            <p class="login">
              <a href="/signup">SignUp</a>
            </p>
          </div>

          <div class="body">
            <div class="login-wrap">
              <div class="login-html">
                <input
                  id="tab-1"
                  type="radio"
                  name="tab"
                  class="sign-in"
                  checked
                />
                <label for="tab-1" class="tab">
                  Sign In
                </label>

                <input id="tab-2" type="radio" name="tab" class="sign-up" />
                <label for="tab-2" class="tab"></label>

                <div class="login-form">
                  <div class="sign-in-htm">
                    <div class="group">
                      <label for="user" class="label">
                        Username
                      </label>
                      <input
                        id="user"
                        name="username"
                        type="text"
                        class="input"
                        onChange={this.onChange}
                      />
                    </div>
                    <div class="group">
                      <label for="pass" class="label">
                        Password
                      </label>
                      <input
                        id="pass"
                        name="password"
                        type="password"
                        class="input"
                        data-type="password"
                        onChange={this.onChange}
                      />
                    </div>

                    <div class="group">
                      <input
                        type="submit"
                        class="button"
                        value="Sign In"
                        onClick={this.login}
                      />
                    </div>
                    <div id="msg" className="loginmsg">
                      invalid user name or password
                    </div>
                    <div class="hr"></div>

                    <div class="foot-lnk">
                      <a class="foot-lnk2" href="/signup">
                        Not registered
                        <br />
                        SIGNUP
                      </a>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
