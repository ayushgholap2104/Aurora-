import { useState } from "react";
import "../styles/login.css";
import logo from "../assets/img/AuroraLogo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("./home");
  };
  return (
    <>
      <main className="Sign_in">
        <form autoComplete="off">
          <div className="signin">
            <div className="Aurora_logo">
              <img src={logo} alt="AuroraLogo" />
            </div>
            <h2>Login</h2>
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
              <button 
              onClick={handleLogin}
              type="submit" 
              id="btn">
                Submit
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/">Signup</Link>
            </p>
          </div>
        </form>
      </main>
    </>
  );
}

export default Login;
