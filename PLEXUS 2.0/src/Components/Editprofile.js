import React, { Component } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import logo from "../images/Logo-Final.png";

import background from "../images/background.gif";

import "../App.css";

export default class Editprofile extends Component {

  
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
      <>
        <div className="editprofile">
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

                <ul className="selected">
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
    )
  }
}


// import React from "react";

// export default function Editprofile() {
//   return (
   
//   );
// }
