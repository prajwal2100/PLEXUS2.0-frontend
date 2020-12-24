import React, { Component } from "react";
import Footer from "./Footer";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../images/Logo-Final.png";
import "../App.css";

export default class SelectionPage extends Component {
  render() {
    return (
      <div>
        <div className="SelectionPage">
          <div className="wrapper">
            <div id="mySidebar" className="collapse-sidebar">
              <a href="" className="closebtn" onClick={this.closeNav}>
                ×
              </a>
              <a href="/">Home</a>
              <a href="/login">Login</a>
              {/* <a href="#">Clients</a> 
              <a href="#">Contact</a> */}
            </div>

            <div id="collapse-main">
              <button className="openbtn" onClick={this.openNav}>
                ☰
              </button>
            </div>

            <div className="sidebar">
              <img src={logo} alt="logo" />
              <div className="navlist">
                <ul>
                  <Link to="/">
                    <li>
                      {" "}
                      <AiOutlineHome className="icon1" /> Home
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="mainpage">
              <div className="nav">
                <p className="title">
                  <Link to="/">Zealicon</Link>
                </p>
                <p className="login">
                  <Link to="/login">Login</Link>
                </p>
              </div>
            </div>

            <div className="mainbody"></div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
