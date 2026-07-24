import { useState } from "react";
import "../styles/signup.css";
import "../styles/responsive.css";

function Signup() {
  <>
    <main class="Sign_up">
      <form autocomplete="off">
        <div class="signup">
          <h2>Sign Up</h2>
          <div class="name" id="user-up">
            <i class="fa-solid fa-circle-user"></i>
            <input
              id="name"
              autocomplete="off"
              type="text"
              name="username"
              placeholder="Name"
              required
              style="text-transform: capitalize"
            />
          </div>
          <div class="E-mail" id="user-up">
            <i class="fa-solid fa-envelope-open"></i>
            <input
              id="email"
              autocomplete="off"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div class="Password" id="user-up">
            <i class="fa-solid fa-lock"></i>
            <input
              id="password"
              autocomplete="off"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div class="create_button">
            <button type="submit" id="btn">
              Create Account
            </button>
          </div>
          <p>
            Already have an account? <a href="./index.html">Sign in</a>
          </p>
        </div>
      </form>
    </main>
  </>;
}

export default Signup;
