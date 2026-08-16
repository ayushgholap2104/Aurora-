import { useState } from "react";
import "../styles/signup.css";
import logo from "../assets/img/AuroraLogo.png"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"

const API_BASE_URL = "http://127.0.0.1:5000";

function Signup() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }

      localStorage.setItem("aurora_token", data.token);
      localStorage.setItem("aurora_user", JSON.stringify(data.user));

      navigate('./home')
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="Sign_up">
        <form autoComplete="off" onSubmit={handleSignup}>
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
                value={formData.username}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {error && (
              <p style={{ color: "red", fontSize: "13px" }}>{error}</p>
            )}
            <div className="create_button">
              <button
              type="submit"
              id="btn"
              disabled={loading}>
                {loading ? "Please wait..." : "Submit"}
              </button>
            </div>
            <p>
              Already have an account? <Link to="./login">Sign in</Link>
            </p>
          </div>
        </form>
      </main>
    </>
  );
}

export default Signup;
