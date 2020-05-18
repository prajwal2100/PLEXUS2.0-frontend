import React, { Component } from "react";
import logo from "../images/Logo-Final.png";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      console.log("call user feed");
    } else {
      //only to check the page home
      this.setState({ redirect: true });
    }
  }

  logout() {
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div>
        <div className="wrapper">
          <div className="sidebar">
            <div className="navlist">
              <img src={logo} alt="logo" />
              <ul>
                <a href="/">
                  <li>Home</li>
                </a>
              </ul>
            </div>
          </div>

          <div className="mainpage">
            <div className="nav">
              <p className="title">
                <a href="/">Plexus</a>
              </p>
              <p className="login">
                <a href="/login">Login</a>
              </p>
            </div>

            <div className="logoutButton">
              <div class="group">
                <input
                  type="submit"
                  class="button"
                  onClick={this.logout}
                  value="Log Out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
