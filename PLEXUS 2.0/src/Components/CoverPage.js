import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../images/Logo-Final.png";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import Footer from "./Footer";

export default class CoverPage extends Component {
  openNav = () => {
    // console.log("hi whats up");
    if (document.getElementById("mySidebar")) {
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

  constructor(props) {
    super(props);
    this.state = {
      ongoingEvent: [],
      futureEvent: [],
      pastEvent: [],
    };
  }

  componentDidMount() {
    // console.log(localStorage.getItem("login"));

    axios
      .get("https://plexus-2.herokuapp.com/dashboard/present-events/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("login")}`,
        },
      })
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data[0].name);
        this.setState({
          ongoingEvent: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://plexus-2.herokuapp.com/dashboard/future-events/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("login")}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        this.setState({
          futureEvent: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://plexus-2.herokuapp.com/dashboard/past-events/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("login")}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        this.setState({
          pastEvent: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // const isAuth = localStorage.getItem("login");
    return (
      <div>
        <div className="coverPage">
          <div className="wrapper">
            <div id="mySidebar" className="collapse-sidebar">
              <a className="closebtn" onClick={this.closeNav}>
                ×
              </a>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              {/* <a href="#">Clients</a> 
              <a href="#">Contact</a> */}
            </div>

            <div id="collapse-main">
              <button className="openbtn" onClick={this.openNav}>
                ☰
              </button>
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

              <h2 className="event"> Ongoing Events</h2>

              <div className="cardEvents">
                <div className="card1">
                  {this.state.ongoingEvent.map((event) => (
                    <div className="cardHolder1" key={event.id}>
                      <div className="card">
                        <div className="items">
                          <h2> {event.name} </h2>
                          <h3> {event.description} </h3>
                          <p> Start Time : {event.start_time.slice(12, 16)} </p>
                          <button>Play</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="event">Upcoming Events</h2>

              <div className="cardEvents">
                <div className="card1">
                  {this.state.futureEvent.map((event) => (
                    <div className="cardHolder2" key={event.id}>
                      <div className="card">
                        <div className="items">
                          <h2> {event.name} </h2>
                          <h3> {event.description} </h3>
                          <p> Start Time : {event.start_time.slice(12, 16)} </p>
                          <button>Play</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="event">Past Events</h2>

              <div className="cardEvents">
                <div className="card1">
                  {this.state.pastEvent.map((event) => (
                    <div className="cardHolder1" key={event.id}>
                      <div className="card">
                        <div className="items">
                          <h2> {event.name} </h2>
                          <h3> {event.description} </h3>
                          <p> Start Time : {event.start_time.slice(12, 16)} </p>
                          <button>Play</button>
                        </div>
                      </div>
                    </div>
                  ))}
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
