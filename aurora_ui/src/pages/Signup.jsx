import { useState } from "react";
import "../styles/signup.css";
import "../styles/responsive.css";

function Signup() {
  <>
    <main className="Sign_up">
      <form autoComplete="off">
        <div className="signup">
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
              style="text-transform: capitalize"
            />
          </div>
          <div className="E-mail" id="user-up">
            <i className="fa-solid fa-envelope-open"></i>
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
            <i className="fa-solid fa-lock"></i>
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
              Create Account
            </button>
          </div>
          <p>
            Already have an account? <a href="./Login.jsx">Sign in</a>
          </p>
        </div>
      </form>
    </main>
  </>;
}

export default Signup;
