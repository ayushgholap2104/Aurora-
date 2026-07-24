import { useState } from "react";
import "../styles/login.css";
import "../styles/responsive.css"
function Login() {
  return (
    <>
      <main class="Sign_in">
        <form autocomplete="off">
          <div class="signin">
            <h2>Sign in</h2>
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
                Sign in
              </button>
            </div>
            <p>
              Don't have an account? <a href="./sign_up.html">Sign up</a>
            </p>
          </div>
        </form>
      </main>
    </>
  );
}

export default Login;
