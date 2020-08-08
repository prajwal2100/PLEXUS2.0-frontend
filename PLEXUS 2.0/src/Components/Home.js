import React, { Component } from "react";
import logo from "../images/Logo-Final.png";
import { Redirect } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

export default class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     redirect: false,
  //   };
  //   this.logout = this.logout.bind(this);
  // }

  // componentWillMount() {
  //   if (sessionStorage.getItem("userData")) {
  //     console.log("call user feed");
  //   } else {
  //     //only to check the page home
  //     this.setState({ redirect: true });
  //   }
  // }

  // logout() {
  //   sessionStorage.setItem("userData", "");
  //   sessionStorage.clear();
  //   this.setState({ redirect: true });
  // }

  render() {
    // if (this.state.redirect) {
    //   return <Redirect to={"/login"} />;
    // }

    return (
      <div className="homePage">
        <div className="wrapper">
          <div className="sidebar">
            <img src={logo} alt="logo" />
            <div className="navlist">
              <ul className="selected">
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
                <Link to="/home">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1" /> Leaderboard
                  </li>
                </Link>
              </ul>
              <ul>
                <Link to="/home">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1" /> Abount event
                  </li>
                </Link>
              </ul>
              <ul>
                <Link to="/home">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1" /> Forum
                  </li>
                </Link>
              </ul>
              <ul>
                <Link to="/home">
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
                <a href="/">Zealicon</a>
              </p>
              <p className="login">
                <a href="/login">Log out</a>
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
        </div>
        <Footer />
      </div>
    );
  }
}
