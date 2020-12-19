import React, { Component } from "react";
import logo from "../images/Logo-Final.png";
import { Redirect } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
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
      postId: null,
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem("login"));

    // ------------------------  This api call is made using javascript native fetch. I've madee a separate header to avoid code clustering ---------------------------------------

    // var myHeaders = new Headers();
    // myHeaders.append(
    //   "Authorization",
    //   `Bearer ${localStorage.getItem("login")}`
    // );

    // var requestOptions = {
    //   method: "GET",
    //   headers: myHeaders,
    //   redirect: "follow",
    // };

    // fetch(
    //   "https://plexus-2.herokuapp.com/api/dashboard/present_events/",
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));

    // ------------------------  This is your code just you are passing the token wrong way. ---------------------------------------

    axios
      .get("https://plexus-2.herokuapp.com/api/dashboard/present_events/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("login")}`,
        },
      })
      .then((response) => {
        console.log(response);
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
    const { postId } = this.state;
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
              {/* <ul>
                <Link to="/forum">
                  <li>
                    {" "}
                    <AiOutlineHome className="icon1" /> Forum
                  </li>
                </Link>
              </ul> */}
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
                <Card1
                  title={postId}
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
