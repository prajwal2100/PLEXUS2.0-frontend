import React, { Component } from 'react'

import { AiOutlineHome } from "react-icons/ai";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import logo from "../images/Logo-Final.png";

import "../App.css";
export default class Leaderboard extends Component {

  openNav = () => {
    console.log("hi whats up");
    if (
      document.getElementById("mySidebar")
    ) {
      document.getElementById("mySidebar").style.width = "250px";
    }
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
    return (
      <div>
        <div>
      <>
        <div className="Leaderboard">
          <div className="wrapper">



          <div id="mySidebar" className="collapse-sidebar">
              <a href="" className="closebtn" onClick={this.closeNav}>×</a>
              <a href="/home">Home</a>
              <a href="/dashboard">Dashboard</a>
              <a href="/leaderboard">Leaderboard</a> 
              <a href="/event">About Event</a>
              <a href="/profile">Edit Profile</a>
              <a href="/login"><button>Logout</button></a>
              
             </div>

             <div id="collapse-main">
               <button className="openbtn" onClick={this.openNav}>☰</button>
             </div>





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
                      <AiOutlineHome className="icon1 " /> Dashboard
                    </li>
                  </Link>
                </ul>
                <ul className="selected">
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
    )
  }
}
