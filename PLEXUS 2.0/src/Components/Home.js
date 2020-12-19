import React, { Component } from "react";
import logo from "../images/Logo-Final.png";
import { Redirect } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiFillAccountBook } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";

import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import "../App.css";

export default class Home extends Component {
  openNav = () => {
    if (document.getElementById("mySidebar")) {
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

  constructor(props) {
    super(props);
    this.state = {
      EventName: null,
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem("login"));

    axios
      .get("https://plexus-2.herokuapp.com/dashboard/present-events/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("login")}`,
        },
      })
      .then((response) => {
        // console.log(response);
        console.log(response.data);
        console.log(response.data[0].name);
        this.setState({
          EventName: response.data[0].name,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // componentDidMount() {
  //   const check = localStorage.getItem("login");
  //   console.log(check);

  //   const requestOptions = {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: "Bearer" + check,
  //     },
  //   };
  //   fetch(
  //     "https://plexus-2.herokuapp.com/api/dashboard/present_events/",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ postId: data.id }));
  //   console.log(this.state.postId);
  // }

  // async componentDidMount() {
  //   const response = await fetch(
  //     " https://plexus-2.herokuapp.com/api/dashboard/present_events/"
  //   );
  //   const data = await response.json();
  //   this.setState({
  //     name: data.name,
  //   });

  //   console.log(data);
  //   console.log(data.length);
  // }

  render() {
    const { EventName } = this.state;

    return (
      <div className="homePage">
        <div className="wrapper">
          <div id="mySidebar" className="collapse-sidebar">
            <a href="" className="closebtn" onClick={this.closeNav}>
              ×
            </a>
            <a href="/home"> Home </a>
            <a href="/dashboard">Dashboard</a>
            <a href="/leaderboard">Leaderboard</a>
            <a href="/event">About Event</a>
            <a href="/profile">Edit Profile</a>
            <a href="/login">
              <button>Logout</button>
            </a>
          </div>

          <div id="collapse-main">
            <button className="openbtn" onClick={this.openNav}>
              ☰
            </button>
          </div>

          <div className="home-sidebar">
            <Link to="/Home">
              <img src={logo} alt="logo" />
            </Link>
            <div className="navlist">
              <Link to="/Home">
                <ul className="selected">
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
                <Link to="/">Plexus</Link>
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

            <h2 className="event"> Ongoing Events</h2>

            <div className="cardEvents">
              <div className="card1">
                <div className="cardHolder1">
                  <div className="card">
                    <div className="items">
                      <h2> {EventName} </h2>
                      <h3> hi hello </h3>
                      <p> hi hello </p>
                      <button>Play</button>
                    </div>
                  </div>
                </div>
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
