import React, { Component } from "react";

import logo from "../images/Logo-Final.png";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

import { AiOutlineHome } from "react-icons/ai";
import Footer from "./Footer";

export default class CoverPage extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="sidebar">
            <img src={logo} alt="logo" />
            <div className="navlist">
              <ul>
                <a href="/">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1" /> Home
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="mainpage">
            <div className="nav">
              <p className="title">
                <a href="/">Zealicon</a>
              </p>
              <p className="login">
                <a href="/login">Login</a>
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
    );
  }
}
