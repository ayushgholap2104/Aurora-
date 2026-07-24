import { useState } from "react";
import "../styles/login.css";
import "../styles/responsive.css"
function Login() {
  return (
    <>
      <main className="Sign_in">
        <form autoComplete="off">
          <div className="signin">
            <h2>Login</h2>
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
                Sign in
              </button>
            </div>
            <p>
              Don't have an account? <a href="./Signup.jsx">Signup</a>
            </p>
          </div>
        </form>
      </main>
    </>
  );
}

export default Login;
