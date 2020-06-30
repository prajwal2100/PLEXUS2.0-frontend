import React, { Component } from "react";
import { PostData1 } from "../services/PostData1";
import { Redirect, Link } from "react-router-dom";
import logo from "../images/Logo-Final.png";
import vector from "../images/vector.png";
import Footer from "./Footer";
import superagent from "superagent";

import eclipse1 from "../images/Ellipse 1.png";
import eclipse2 from "../images/Ellipse 2.png";
import eclipse3 from "../images/Ellipse 3.png";
import eclipse4 from "../images/Ellipse 4.png";

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      admissionNumber: "",
      password: "",
      confirmPassword: "",
      contactNumber: "",
      email: "",
      collegeName: "",

      errors: [],
      usernameErr: "",
      passwordErr: "",
      confirmPasswordErr: "",
      contactNumberErr: "",
      emailErr: "",
      usernameres: "",
      emailres: "",
    };
  }

  handelJwt = () => {
    const payload = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      contactNumber: this.state.contactNumber,
      confirmPassword: this.state.confirmPassword,
      admissionNumber: this.state.admissionNumber,
    };

    superagent
      .post(
        "https://cors-anywhere.herokuapp.com/https://ncs-plexus.herokuapp.com/api/register/player_register/"
      )
      .set("Content-Type", "application/json")
      .send(payload)
      .then((res) => {
        localStorage.setItem("logintoken", res.body.token.access);
        if (res.body.token.access && res.body.token.access.length > 10) {
          this.props.onSuccessfulLogin();
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        if (err && err.response && err.response.body) {
          if (err.response.body.username) {
            this.setState({
              usernameres: err.response.body.username,
            });
          }
          if (err.response.body.email) {
            this.setState({
              emailres: err.response.body.email,
            });
          }
        }
      });
  };

  Validation = (elm, msg) => {
    this.setState((prevState) => ({
      errors: [...prevState.errors, { elm, msg }],
    }));
  };

  clearValidation = (elm) => {
    this.setState((prevState) => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (err.elm !== elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  };

  onAdmissionChange = (e) => {
    this.setState({ admissionNo: e.target.value });
    this.clearValidation("name");
  };
  onUsernameChange = (e) => {
    this.setState({ username: e.target.value });
    this.clearValidation("username");
  };

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
    this.clearValidation("password");
  };
  onConfirmpasswordChange = (e) => {
    this.setState({ cpassword: e.target.value });
    this.clearValidation("cpassword");
  };
  onContactNumberChange = (e) => {
    this.setState({ mobile: e.target.value });
    this.clearValidation("mobile");
  };
  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
    this.clearValidation("email");
  };

  submitRegister = (e) => {
    e.preventDefault();
    if (this.state.admissionNo === "") {
      this.Validation("admissionNo", "Please enter your Admission No");
    }
    if (this.state.username === "" || this.state.username.length < 4) {
      this.Validation("username", "Don't skip and greater than 4");
    }
    if (this.state.password === "") {
      this.Validation("password", "Password length should be greater than 6");
    }
    if (
      this.state.confirmPassword === "" ||
      this.state.confirmPassword !== this.state.password
    ) {
      this.Validation("confirmPassword", "Password didn't matched !!");
    }

    if (
      this.state.contactNumber === "" ||
      this.state.contactNumber.length < 10
    ) {
      this.Validation("mobile", "Enter Valid Mobile No.");
    }
    if (this.state.email === "") {
      this.Validation("email", "Provide mail for ease !!!");
    }
    if (
      this.state.admissionNumber !== "" &&
      this.state.username.length > 4 &&
      this.state.password !== "" &&
      this.state.confirmPassword !== "" &&
      this.state.contactNumber !== "" &&
      this.state.email !== ""
    ) {
      this.handleJwt();
    }
  };

  render() {
    let admissionNumberErr = null,
      usernameErr = null,
      passwordErr = null,
      confirmPasswordErr = null,
      contactNumberErr = null,
      emailErr = null;
    for (let err of this.state.errors) {
      if (err.elm === "username") {
        usernameErr = err.msg;
      }
      if (err.elm === "password") {
        passwordErr = err.msg;
      }
      if (err.elm === "cpassword") {
        confirmPasswordErr = err.msg;
      }
      if (err.elm === "mobile") {
        contactNumberErr = err.msg;
      }
      if (err.elm === "email") {
        emailErr = err.msg;
      }
    }

    return (
      <div>
        <div className="signupPage">
          <div className="nav">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="heading">
              <h2>Zealicon</h2>
            </div>
            <div className="signup">
              <Link to="/login">Login</Link>
            </div>
          </div>

          <div className="signupBody">
            <img className="vector" src={vector} alt="vector" />

            <div className="signupContainer">
              <div className="text">
                <h2>Sign up</h2>
                <h4>Select your avatar</h4>
                <div className="avatarImg">
                  <img src={eclipse1} alt="avatar1" />
                  <img src={eclipse2} alt="avatar2" />
                  <img src={eclipse3} alt="avatar3" />
                  <img src={eclipse4} alt="avatar4" />
                </div>

                <input
                  // id="email"
                  name="email"
                  type="text"
                  onChange={this.onEmailChange}
                  placeholder="Email address"
                />
                <br />

                <input
                  // id="username"
                  name="username"
                  type="text"
                  onChange={this.onUsernameChange}
                  placeholder="Name"
                />
                <br />

                <input
                  // id="pass"
                  name="password"
                  type="password"
                  data-type="password"
                  onChange={this.onPasswordChange}
                  placeholder="Password"
                />

                <input
                  // id="confirmpass"
                  name="confirmPassword"
                  type="password"
                  onChange={this.onConfirmpasswordChange}
                  placeholder="Confirm Password"
                />
                <br />
                <br />
                <br />

                {/* <input
                  id="collegeName"
                  name="collegeName"
                  type="text"
                  onChange={this.onChange}
                  placeholder="College Name"
                />
                <br /> */}

                <input
                  // id="admissionNumber"
                  name="admissionNumber"
                  type="text"
                  onChange={this.onAdmissionChange}
                  placeholder="Admission Number"
                />
                <br />

                <input
                  // id="contactNumber"
                  name="contactNumber"
                  type="text"
                  onChange={this.onContactNumberChange}
                  placeholder="Contact Number"
                />
                <br />

                <button
                  type="submit"
                  value="Signup"
                  onClick={this.submitRegister}
                >
                  Sign Up
                </button>
                <h3>
                  Already have an account!{" "}
                  <span>
                    {" "}
                    <Link to="/login">Login</Link>{" "}
                  </span>
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
