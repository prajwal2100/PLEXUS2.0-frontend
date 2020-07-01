import React, { Component } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import logo from "../images/Logo-Final.png";
import vector from "../images/vector.png";
import Footer from "./Footer";
import axios from 'axios'
import eclipse1 from "../images/Ellipse 1.png";
import eclipse2 from "../images/Ellipse 2.png";
import eclipse3 from "../images/Ellipse 3.png";
import eclipse4 from "../images/Ellipse 4.png";
import { notify, report } from "superagent";

// Using useHistory hook to redirect after successful api call
let history = useHistory();


// function TO VALIDATE EMAIL. You can test your regex on https://regex101.com/.

// Take a quick look at https://regexr.com/ or just google to know basic about regex

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export default class SignupPage extends Component {
  constructor(props) {
    super(props);

    // states and the error validation that are used in function below are defined here.
    this.state = {
      username: null,
      email: null,
      password: null,
      confirmPassword: null,
      contactNumber: null,
      admissionNumber: null,
      errors: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        contactNumber: '',
        admissionNumber: ''
      }
    };
  }


  // This is the actual method that validates the input field. You have to add more custom validations like in confirm password to matchh the original typed password. 
  // I have added only basic validation just to show. You have to add phone number validation as well. This methos checks the validation on each change.


  // If adding custom validation is tiresome you can use FORMIK a great react validation library. Or you any UI framework like ant design or reactstrap(They all come with form and validation)

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'username':
        errors.username =
          value.length < 5
            ? 'Username must be 5 characters long!'
            : '';
        break;
      // IF THERE IS AN ERROR THEN SHOW MESSAGE OTHERWISE EMPTY STRING 

      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      case 'confirmPassword':
        errors.confirmPassword =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      case 'contactNumber':
        errors.contactNumber =
          value.length < 9
            ? 'Enter a valid number'
            : '';
        break;
      case 'admissionNumber':
        errors.admissionNumber =
          value.length < 5
            ? 'Admission number is required!'
            : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }


  // This method get called when the user press create button. This button checks if there are errors are notify. If not then prints payload. Payload is the actual data to be setInterval. 
  // If the form is validated we will  make api call

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      const payload = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        contactNumber: this.state.contactNumber,
        confirmPassword: this.state.confirmPassword,
        admissionNumber: this.state.admissionNumber,
      };
      console.info('Valid Form')

      // make api call. I've made api call with axios but you can make it with fetch or superagent(That kunal sir used in tech-trek). It will be a post call
      // myurl  === Server api = hosted backend API

      axios({
        method: 'post',
        url: 'myurl',
        data: payload,
      })
        .then(function (response) {
          //handle success 
          console.log(response);
          // Now if a token comes in response. Then store it in localStorage and redirect to homepage.
          if ('token' in response.data) {
            localStorage.setItem('token', response.data.token)
          }
          history.push('/')
        })
        .catch(function (response) {
          //handle error
          console.log(response);

          // Show error to user. Like ALREADY REGISTERD Or anything. I'm just consoling the messgae

          console.log(response.data.message)
        });

    } else {
      console.error('Invalid Form')
    }
  }




  render() {


    const { errors } = this.state;


    return (
      <div>
        <div className="signupPage">
          <div className="nav">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="heading">
              <h2>Zealicon</h2>
            </div>
            <div className="signup">
              <Link to="/login">Login</Link>
            </div>
          </div>

          <div className="signupBody">
            <img className="vector" src={vector} alt="vector" />

            <div className="signupContainer">
              <div className="text">
                <h2>Sign up</h2>
                <h4>Select your avatar</h4>
                <div className="avatarImg">
                  <img src={eclipse1} alt="avatar1" />
                  <img src={eclipse2} alt="avatar2" />
                  <img src={eclipse3} alt="avatar3" />
                  <img src={eclipse4} alt="avatar4" />
                </div>
                <form onSubmit={this.handleSubmit} >
                  <div className='username'>
                    <input type='text' name='username' onChange={this.handleChange} required placeholder="Username" />
                    {/* This span shows error. You can style it as you want */}
                    {errors.username.length > 0 &&
                      <span className='error'>{errors.username}</span>}
                  </div>
                  <div className='email'>
                    <input type='email' name='email' onChange={this.handleChange} required placeholder="Email" />
                    {/* This span shows error. You can style it as you want */}
                    {errors.email.length > 0 &&
                      <span className='error'>{errors.email}</span>}
                  </div>
                  <div className='password'>
                    <input type='password' name='password' onChange={this.handleChange} required placeholder="Password" />
                    {/* This span shows error. You can style it as you want */}
                    {errors.password.length > 0 &&
                      <span className='error'>{errors.password}</span>}
                  </div>
                  <div className='confirmPassword'>
                    <input type='password' name='confirmPassword' onChange={this.handleChange} required placeholder="Confirm Password" />
                    {/* This span shows error. You can style it as you want */}
                    {errors.confirmPassword.length > 0 &&
                      <span className='error'>{errors.confirmPassword}</span>}
                  </div>
                  <div className='contact'>
                    <input type='number' name='contactNumber' onChange={this.handleChange} required placeholder="Contact Number" />
                    {/* This span shows error. You can style it as you want */}
                    {errors.contactNumber.length > 0 &&
                      <span className='error'>{errors.contactNumber}</span>}
                  </div>
                  <div className='admission'>
                    <input type='text' name='admissionNumber' onChange={this.handleChange} required placeholder="Admission Number" />
                    {/* This span shows error. You can style it as you want */}
                    {errors.admissionNumber.length > 0 &&
                      <span className='error'>{errors.admissionNumber}</span>}
                  </div>
                  <div className='submit'>
                    <button>Create</button>
                  </div>
                </form>

                <h3>
                  Already have an account!{" "}
                  <span>
                    {" "}
                    <Link to="/login">Login</Link>{" "}
                  </span>
                </h3>
              </div>
            </div>
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
