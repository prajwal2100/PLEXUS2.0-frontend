import React, { Component } from 'react'

import { AiOutlineHome } from "react-icons/ai";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import logo from "../images/Logo-Final.png";

import "../App.css";
export default class AboutEvent extends Component {


  
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
        <div className="aboutEvent">
          <div className="wrapper">




          <div id="mySidebar" className="collapse-sidebar">
              <a href="" className="closebtn" onClick={this.closeNav}>×</a>
              <a href="/home">Home</a>
              <a href="/dashboard">Dashboard</a>
              <a href="/leaderboard">Leaderboard</a> 
              <a href="/event">About Event</a>
              <a href="/profile">Edit Profile</a>
              <button>Logout</button>
              
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
                <ul className="selected">
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
                  <Link to="/">zealicon</Link>
                </p>
                <p className="login">
                  <Link to="/">LogOut</Link>
                </p>
              </div>
            </div>
            <div className="mainbody">
              <div className="box1">
                <h2>Errata</h2>
                <p>
                  Errata is an online treasure hunt which will test your
                  googling skills. The event will start before the Zealicon and
                  will continue for 3 days. Questions related to movies, tv
                  series, anime etc will be asked. Easy isn’t it?
                </p>
              </div>

              <div className="box2">
                <h2 className="box2title">Event Details</h2>
                <div className="startEnd">
                  <div className="start">
                    <h2>
                      Start Time: <br /> <span> 12th Feb 2020, 12:04 AM </span>{" "}
                    </h2>
                  </div>

                  <div className="end">
                    <h2>
                      End Time: <br /> <span> 15th Feb 2020, 12:04 AM </span>{" "}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="box3">
                <h2>Rules</h2>

                <ol>
                  <li>
                    For norland produce age wishing. To figure on it spring
                    season up. Her provision acuteness had excellent two why
                    intention.
                  </li>
                  <li>
                    As called mr needed praise at. Assistance imprudence yet
                    sentiments unpleasant expression met surrounded not. Be at
                    talked ye though secure nearer.
                  </li>
                  <li>
                    On projection apartments unsatiable so if he entreaties
                    appearance. Rose you wife how set lady half wish. Hard sing
                    an in true felt.
                  </li>
                  <li>
                    Procuring education on consulted assurance in do. Is
                    sympathize he expression mr no travelling.
                  </li>
                  <li>
                    So striking at of to welcomed resolved. Northward by
                    described up household therefore attention.
                  </li>
                </ol>

                <button>Play</button>
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


