import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/LogIn.css";

function LogIn() {
  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${domain}login`, {
        username,
        password,
      });

      if (response.status === 200) {
        // Successful login
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("isAuthenticated", true);
        console.log("LOGGED IN SUCCESSFULLY");

        // Decode and log token
        // const decodedToken = jwt.decode(token);
        // console.log("Decoded Token:", decodedToken);
        navigate("/");

      } else {
        setError(response.data.message || "Authentication failed");
        localStorage.setItem("isAuthenticated", false);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <div className="login-body">
        <div className="login-container">
          <h1>Log in</h1>

          <form onSubmit={handleSubmit}>
            <div className="login-form">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="inputClass"
                id="usernameInput"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <i className="bx bxs-user-circle"></i>
            </div>

            <div className="login-form">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="inputClass"
                id="userpassInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="remember-forgot">
              <label htmlFor="rememberMe">
                <input type="checkbox" id="rememberMe" />
                Remember me
              </label>
              <Link to="/forgot_password">Forgot password?</Link>
            </div>

            <button className="btn" type="submit">
              Login
            </button>

            <div className="register-link">
              Don't have an account? <Link to="/sign_up">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
