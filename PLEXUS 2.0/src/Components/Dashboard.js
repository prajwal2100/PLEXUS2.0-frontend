import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import logo from "../images/Logo-Final.png";

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
              <ul>
                <Link to="/dashboard">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1" /> Dashboard
                  </li>
                </Link>
              </ul>
              <ul>
                <Link to="/">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1" /> Leaderboard
                  </li>
                </Link>
              </ul>
              <ul>
                <Link to="/">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1" /> Abount event
                  </li>
                </Link>
              </ul>
              <ul>
                <Link to="/">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1" /> Forum
                  </li>
                </Link>
              </ul>
              <ul>
                <Link to="/">
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
          <div className="mainbody"></div>

          <Footer />
        </div>
      </div>
    </>
  );
}
