import React, { Component } from "react";
import { PostData1 } from "../services/PostData1";
import { Redirect } from "react-router-dom";

export default class SignupPage extends Component {
  // userdata;
  // constructor(props) {
  //   super(props);
  //   this.onChangeName = this.onChangeName.bind(this);
  //   this.onChangeEmail = this.onChangeEmail.bind(this);
  //   this.onChangePassword = this.onChangePassword.bind(this);
  //   this.onChangeConfirmpassword = this.onChangeConfirmpassword.bind(this);
  //   this.onChangeAdmissionNumber = this.onChangeAdmissionNumber.bind(this);

  //   this.state = {
  //     username: "",
  //     password: "",
  //     email: "",
  //     admissionNumber: "",
  //     redirect: false,
  //   };
  // }

  // onChangeName(e) {
  //   this.setState({ name: e.target.value });
  // }
  // onChangeEmail(e) {
  //   this.setState({ email: e.target.value });
  // }
  // onChangePassword(e) {
  //   this.setState({ password: e.target.value });
  // }
  // onChangeConfirmpassword(e) {
  //   this.setState({ confirmPassword: e.target.value });
  // }
  // onChangeAdmissionNumber(e) {
  //   this.setState({ admissionNumber: e.target.value });
  // }

  // onSubmit(e) {
  //   e.preventDefault();
  //   this.setState({
  //     username: "",
  //     password: "",
  //     email: "",
  //     admissionNumber: "",
  //   })
  // }

  // componentDidMount() {
  //   this.userdata = JSON.parse(localStorage.getItem("user"));
  //   if (localStorage.getItem("user")) {
  //     this.setState({
  //       name: this.userData.name,
  //       email: this.userData.email,
  //       password: this.userData.password,
  //       confirmPassword: this.userData.confirmPassword,
  //       admissionNumber: this.userData.admissionNumber,
  //     });
  //   }else{
  //     this.setState({
  //       username: "",
  //       password: "",
  //       email: "",
  //       admissionNumber: "",
  //     })

  //     };
  //   }
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem("user", JSON.stringify(nextState));
  // }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      admissionNumber: "",
      redirect: false,
    };
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signup() {
    if (
      this.state.username &&
      this.state.password &&
      this.state.email &&
      this.state.admissionNumber
    ) {
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
    // console.log(this.state);
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
              {/* <form onSubmit={this.onSubmit}> */}
              <h2 class="form-title" id="signup">
                <span>or</span>Sign up
              </h2>
              <div class="form-holder">
                <input
                  type="text"
                  class="input"
                  name="username"
                  placeholder="Name"
                  // value={this.state.name}
                  onChange={this.onChange}
                />
                <input
                  type="email"
                  class="input"
                  name="email"
                  placeholder="Email"
                  // value={this.state.email}
                  onChange={this.onChange}
                />
                <input
                  type="password"
                  class="input"
                  name="password"
                  placeholder="Password"
                  // value={this.state.password}
                  onChange={this.onChange}
                />
                <input
                  type="password"
                  class="input"
                  placeholder="Confirm Password"
                  // value={this.state.confirmPassword}
                  onChange={this.onChange}
                />
                <input
                  type="text"
                  class="input"
                  name="admissionNumber"
                  placeholder="Admission Number"
                  // value={this.state.admissionNumber}
                  onChange={this.onChange}
                />
              </div>{" "}
              <input
                type="submit"
                class="button"
                value="Sign Up"
                onClick={this.signup}
              />
              {/* </form> */}
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
