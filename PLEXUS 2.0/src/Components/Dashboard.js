import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import logo from "../images/Logo-Final.png";

import "../App.css";

export default function Dashboard() {
  return (
    <>
      <div className="dashboardWrapper">
        <div className="wrapper">
          <div className="sidebar">
            <img src={logo} alt="logo" />
            <div className="navlist">
              <ul>
                <Link to="/Home">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1" /> Home
                  </li>
                </Link>
              </ul>
              <ul className="selected">
                <Link to="/dashboard">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1 " /> Dashboard
                  </li>
                </Link>
              </ul>
              <ul>
                <Link to="/leaderboard">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1" /> Leaderboard
                  </li>
                </Link>
              </ul>
              <ul>
                <Link to="/event">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1" /> Abount event
                  </li>
                </Link>
              </ul>
      
              <ul>
                <Link to="/profile">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1" /> Edit Profile
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
                <Link to="/">LogOut</Link>
              </p>
            </div>
          </div>
          <div className="mainbody">
            <div className="heading">
              <h2>Question</h2>
            </div>
            <div className="questionBox">
              <div className="content">
                <h4>
                  {" "}
                  I follow you all the time and copy your every move, but you
                  cant touch me or catch me. What am i !{" "}
                </h4>
                <input type="text" placeholder="I seek an Answer" />
                <button>Submit</button>
                <p> Wrong Answer! Time to think outside the box! </p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
