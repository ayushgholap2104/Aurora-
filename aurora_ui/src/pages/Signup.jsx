import { useState } from "react";
import "../styles/signup.css";
import logo from "../assets/img/AuroraLogo.png"
import "../styles/responsive.css";

function Signup() {
  return (
    <>
      <main className="Sign_up">
        <form autoComplete="off">
          <div className="signup">
            <div className="Aurora_logo">
              <img src={logo} alt="AuroraLogo" />
            </div>
            <h2>Sign Up</h2>
            <div className="name" id="user-up">
              <i className="fa-solid fa-circle-user"></i>
              <input
                id="name"
                autoComplete="off"
                type="text"
                name="username"
                placeholder="Name"
                required
              />
            </div>
            <div className="E-mail" id="user-up">
              <i className="fa-solid fa-envelope"></i>
              <input
                id="email"
                autoComplete="off"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="Password" id="user-up">
              <i className="fa-solid fa-shield-halved"></i>
              <input
                id="password"
                autoComplete="off"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="create_button">
              <button type="submit" id="btn">
                Submit
              </button>
            </div>
            <p>
              Already have an account? <a href="./Login.jsx">Sign in</a>
            </p>
          </div>
        </form>
      </main>
    </>
  );
}

export default Signup;
