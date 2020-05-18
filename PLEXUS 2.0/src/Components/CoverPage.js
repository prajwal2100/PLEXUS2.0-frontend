import React, { Component } from "react";

import logo from "../images/Logo-Final.png";
import Card from "./Card";

export default class CoverPage extends Component {
  render() {
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
          </div>
          <div className="mainbody">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}
