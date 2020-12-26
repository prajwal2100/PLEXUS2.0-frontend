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

import "../App.css";
export default class Leaderboard extends Component {
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
        <div>
          <>
            <div className="Leaderboard">
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
                      <ul className="selected">
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
                          <AiOutlineNotification className="icon1" /> Abount
                          event
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
                      <ul>
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
                  <div className="heading">
                    <h2>Leaderboard</h2>
                  </div>
                  <div className="leaderTable">
                    <div className="row1">
                      <h2 className="rank">Rank</h2>
                      <h2 className="name">Name</h2>
                      <h2 className="score">Score</h2>
                      <h2 className="hits">Hits</h2>
                    </div>
                    <div className="row2">
                      <h2 className="rank">1.</h2>
                      <h2 className="name">Shubham Singh</h2>
                      <h2 className="score">1450</h2>
                      <h2 className="hits">10</h2>
                    </div>
                    <div className="row3">
                      <h2 className="rank">2. </h2>
                      <h2 className="name">Rex</h2>
                      <h2 className="score">1200</h2>
                      <h2 className="hits">10</h2>
                    </div>
                    <div className="row4">
                      <h2 className="rank">3. </h2>
                      <h2 className="name">Dexter</h2>
                      <h2 className="score">900 </h2>
                      <h2 className="hits">10</h2>
                    </div>
                    <div className="row5">
                      <h2 className="rank">4. </h2>
                      <h2 className="name">Prajwal</h2>
                      <h2 className="score">800</h2>
                      <h2 className="hits">10</h2>
                    </div>
                    <div className="row6">
                      <h2 className="rank">5. </h2>
                      <h2 className="name">Saksham</h2>
                      <h2 className="score">20</h2>
                      <h2 className="hits">10</h2>
                    </div>
                  </div>
                </div>

                <Footer />
              </div>
            </div>
          </>
        </div>
      </div>
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  }
}
