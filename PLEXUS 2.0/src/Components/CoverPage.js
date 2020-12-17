import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../images/Logo-Final.png";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

import { AiOutlineHome } from "react-icons/ai";
import Footer from "./Footer";

export default class CoverPage extends Component {

  
  openNav = () => {
    console.log("hi whats up");
    if (
      document.getElementById("mySidebar")
    ) {
      document.getElementById("mySidebar").style.width = "250px";
    }
  };

  // function closeNav() {
  //   document.getElementById("mySidebar").style.width = "0";
  //   document.getElementById("collapse-main").style.marginLeft = "0";
  // }

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
        <div className="coverPage">
          <div className="wrapper">

            <div id="mySidebar" className="collapse-sidebar">
              <a href="" className="closebtn" onClick={this.closeNav}>×</a>
              <a href="/">Home</a>
              <a href="/login">Login</a>
              {/* <a href="#">Clients</a> 
              <a href="#">Contact</a> */}
            </div>

            <div id="collapse-main">
              <button className="openbtn" onClick={this.openNav}>☰</button>
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
            <div className="mainbody">
              <div className="welcomeText">
                <h2>Welcome</h2>
                <p>Find all your live events put up here for you!</p>
              </div>

              <h2 className="event">Ongoing Events</h2>

              <div className="cardEvents">
                <div className="card1">
                  <Card1
                    title="Errata"
                    description="An online treasure hunt"
                    time="ENDS ON 30TH JUNE 7:06PM"
                  />
                </div>

                <div className="card1">
                  <Card1
                    title="Algothematics"
                    description="An online algo quiz"
                    time="ENDS ON 30TH JUNE 7:06PM"
                  />
                </div>
              </div>

              <h2 className="event">Upcoming Events</h2>

              <div className="cardEvents">
                <div className="card1">
                  <Card2
                    title="Khoj"
                    description="An real online treasure hunt"
                    time="ENDS ON 30TH JUNE 7:06PM"
                  />
                </div>

                <div className="card1">
                  <Card2
                    title="Ovid"
                    description="An online paint competiton"
                    time="ENDS ON 30TH JUNE 7:06PM"
                  />
                </div>
                <div className="card1">
                  <Card2
                    title="Electrohut"
                    description="An online Quanta quiz"
                    time="ENDS ON 30TH JUNE 7:06PM"
                  />
                </div>
              </div>

              <h2 className="event">Past Events</h2>

              <div className="cardEvents">
                <div className="card1">
                  <Card3
                    title="Khoj"
                    description="An real online treasure hunt"
                    time="ENDS ON 30TH JUNE 7:06PM"
                  />
                </div>

                <div className="card1">
                  <Card3
                    title="Ovid"
                    description="An online paint competiton"
                    time="ENDS ON 30TH JUNE 7:06PM"
                  />
                </div>
                <div className="card1">
                  <Card3
                    title="Electrohut"
                    description="An online Quanta quiz"
                    time="ENDS ON 30TH JUNE 7:06PM"
                  />
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
