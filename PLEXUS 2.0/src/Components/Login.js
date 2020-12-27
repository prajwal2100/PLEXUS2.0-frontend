import React, { Component } from "react";
import { PostData } from "../services/PostData";
import { Redirect, Link } from "react-router-dom";
import logo from "../images/Logo-Final.png";
import vector from "../images/vector.png";
import Footer from "./Footer";

import "../App.css";
import "../ldbtn.min.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
      },
      redirect: false,
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    // console.log(this.state.username);
    // console.log(this.state.password);

    if (this.state.username != undefined || this.state.password != undefined) {
      if (document.getElementById("btnid")) {
        document.getElementById("btnid").style.display = "none";
      }

      if (document.getElementById("loader")) {
        document.getElementById("loader").style.display = "block";
      }
    }

    if (this.state.username && this.state.password) {
      PostData("login", this.state).then((result) => {
        let responseJSON = result;
        // console.log(responseJSON);
        // console.log("response from backend");

        if (responseJSON.access != null) {
          localStorage.setItem("login", responseJSON.access);
          this.props.history.push("/home");
        } else {
          toast.info("Invalid Credentials OR not Registered");
          // document.getElementById("user").value = "";
          // document.getElementById("pass").value = "";
          document.getElementById("loader").style.display = "none";
          document.getElementById("btnid").style.display = "block";
        }

        // if (responseJSON.userData) {
        //   localStorage.getItem("userData", responseJSON);
        //   this.setState({ redirect: true });
        // } else {
        //   console.log("error");
        // }
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
    if (localStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }

    const something = (event) => {
      if (event.keyCode === 13) {
        this.login();
      }
    };

    return (
      <div>
        <div className="loginPage">
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
              <Link to="/signup">Sign up</Link>
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
                  onKeyDown={(e) => something(e)}
                />
                <p>Forgot password?</p>

                <div id="loader"></div>

                <button
                  id="btnid"
                  type="submit"
                  value="Sign In"
                  onClick={this.login}
                >
                  Login
                </button>
                <h3>
                  Don't have an account?{" "}
                  <span>
                    {" "}
                    <Link to="/signup">Sign up</Link>
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
