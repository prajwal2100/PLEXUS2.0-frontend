import React, { Component } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiFillAccountBook } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import { Redirect } from "react-router-dom";

import Footer from "./Footer";
import { Link } from "react-router-dom";
import logo from "../images/Logo-Final.png";

import background from "../images/background.gif";

import "../App.css";

export default class Editprofile extends Component {
  openNav = () => {
    console.log("hi whats up");
    if (document.getElementById("mySidebar")) {
      document.getElementById("mySidebar").style.width = "250px";
    }
  };

  logout = () => {
    localStorage.clear();
  };

  closeNav = () => {
    if (
      document.getElementById("mySidebar") &&
      document.getElementById("collapse-main")
    ) {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("collapse-main").style.marginLeft = "0";
    }
  };

  render() {
    const isAuth = localStorage.getItem("login");
    return isAuth ? (
      <div>
        <>
          <div className="editprofile">
            <div className="wrapper">
              <div id="mySidebar" className="collapse-sidebar">
                <a className="closebtn" onClick={this.closeNav}>
                  ×
                </a>
                <Link to="/home"> Home </Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/leaderboard">Leaderboard</Link>
                <Link to="/event">About Event</Link>
                <Link to="/profile">Edit Profile</Link>
                <Link to="/login">
                  <button>Logout</button>
                </Link>
              </div>

              <div id="collapse-main">
                <button className="openbtn" onClick={this.openNav}>
                  ☰
                </button>
              </div>

              <div className="sidebar">
                <Link to="/Home">
                  <img src={logo} alt="logo" />
                </Link>
                <div className="navlist">
                  <Link to="/Home">
                    <ul>
                      <li>
                        {" "}
                        <AiOutlineHome className="icon1" /> Home
                      </li>
                    </ul>
                  </Link>

                  <Link to="/dashboard">
                    <ul>
                      <li>
                        {" "}
                        <AiOutlineDashboard className="icon1" /> Dashboard
                      </li>
                    </ul>
                  </Link>

                  <Link to="/leaderboard">
                    <ul>
                      <li>
                        {" "}
                        <AiFillAccountBook className="icon1" /> Leaderboard
                      </li>
                    </ul>
                  </Link>

                  <Link to="/event">
                    <ul>
                      <li>
                        {" "}
                        <AiOutlineNotification className="icon1" /> Abount event
                      </li>
                    </ul>
                  </Link>
                  {/* <ul>
                <Link to="/forum">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1" /> Forum
                  </li>
                </Link>
              </ul> */}
                  <Link to="/profile">
                    <ul className="selected">
                      <li>
                        {" "}
                        <AiFillProfile className="icon1" /> Edit Profile
                      </li>
                    </ul>
                  </Link>
                </div>
              </div>

              <div className="mainpage">
                <div className="nav">
                  <p className="title">
                    <Link to="/">Zealicon</Link>
                  </p>
                  <p className="login">
                    <Link to="/" onClick={this.logout}>
                      LogOut
                    </Link>
                  </p>
                </div>
              </div>
              <div className="mainbody">
                <div className="edit">
                  <div className="card">
                    <div className="smallcard">
                      <div className="topbox"></div>
                      <div className="circleimg"></div>
                      <div className="bottombox">
                        <h2>Shubham Singh</h2>
                        <h3>rex1234@gmail.com</h3>
                      </div>
                    </div>
                    <div className="maincard">
                      <h2>Edit Profile</h2>
                      <div className="sets">
                        <div className="set1">
                          <div className="change">
                            <p>Email Address:</p>
                            <input type="text" placeholder="rex123@gmail.com" />
                          </div>

                          <div className="change">
                            <p>Name:</p>
                            <input type="text" placeholder="rex" />
                          </div>
                        </div>

                        <div className="set2">
                          <div className="change">
                            <p>Password:</p>
                            <input type="password" />
                          </div>
                          <div className="change">
                            <p>Contact Number:</p>
                            <input type="text" placeholder="99999999999" />
                          </div>
                        </div>
                      </div>

                      <button> Update Profile </button>
                    </div>
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </>
      </div>
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  }
}

// import React from "react";

// export default function Editprofile() {
//   return (

//   );
// }
