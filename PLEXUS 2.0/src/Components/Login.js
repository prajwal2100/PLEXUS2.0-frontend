import React, { Component } from "react";
import { PostData } from "../services/PostData";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false
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
          console.log("login error");
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
        <div class="loginPage">
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

                    <div class="hr"></div>

                    <div class="foot-lnk">
                      <a class="foot-lnk2" href="#forgot">
                        Forgot Password?
                      </a>
                      <br />
                      <label for="tab-2" class="tab foot-lnk2">
                        Not a member?
                      </label>
                    </div>
                  </div>

                  {/* sign up */}
                  {/* 
                  <div class="sign-up-htm">
                    <div class="group">
                      <label for="user" class="label">
                        Username
                      </label>
                      <input id="user" type="text" class="input" />
                    </div>
                    <div class="group">
                      <label for="pass" class="label">
                        Password
                      </label>
                      <input
                        id="pass"
                        type="password"
                        class="input"
                        data-type="password"
                      />
                    </div>

                    <div class="group">
                      <label for="pass" class="label">
                        Email Address
                      </label>
                      <input id="pass" type="text" class="input" />
                    </div>
                    <div class="group">
                      <input type="submit" class="button" value="Sign Up" />
                    </div>
                    <div class="hr"></div>
                    <div class="foot-lnk">
                      <label for="tab-1">Already Member? </label>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
