import React, { Component } from "react";
import { PostData1 } from "../services/PostData1";
import { Redirect } from "react-router-dom";

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      redirect: false,
    };
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signup() {
    if (this.state.username && this.state.password) {
      PostData1("signup", this.state).then((result) => {
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
        <div className="signupWrapper">
          <div class="loginnav2">
            <p class="title2">
              <a href="/">Plexus</a>
            </p>
            <p class="login2">
              <a href="/signup">SignUp</a>
            </p>
          </div>
          <div class="form-structor">
            {/* signup */}

            <div class="signup">
              <h2 class="form-title" id="signup">
                <span>or</span>Sign up
              </h2>
              <div class="form-holder">
                <input
                  type="text"
                  class="input"
                  placeholder="Name"
                  onChange={this.onChange}
                />
                <input
                  type="email"
                  class="input"
                  placeholder="Email"
                  onChange={this.onChange}
                />
                <input
                  type="password"
                  class="input"
                  placeholder="Password"
                  onChange={this.onChange}
                />
                <input
                  type="password"
                  class="input"
                  placeholder="Confirm Password"
                  onChange={this.onChange}
                />
                <input
                  type="text"
                  class="input"
                  placeholder="Admission Number"
                  onChange={this.onChange}
                />
              </div>{" "}
              <input
                type="submit"
                class="button"
                value="Sign Up"
                onClick={this.signup}
              />
            </div>

            {/* login */}

            <div class="login slide-up">
              <div class="center">
                <h2 class="form-title" id="login">
                  <a className="nodeco" href="/login">
                    <span>or</span>Log in
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
