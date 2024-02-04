import React from 'react';
import '../styles/LogIn.css';

function LogIn() {
  return (
    <>
    <div className='login-body'>
      <div className="login-container">
        <h1>Log in</h1>

        <form action="#">
          <div className="login-form">
            <input
              type="text"
              placeholder="Username"
              className="inputClass"
              id="usernameInput"
              required
            />
            <i className="bx bxs-user-circle"></i>
          </div>
          <div className="login-form">
            {/* Correct the typo here */}
            <input
              type="password"
              placeholder="Password"
              className="inputClass"
              id="userpassInput"
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forgot">
            <label htmlFor="rememberMe">
              <input
                type="checkbox"
                id="rememberMe"
              />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            Don't have an account? <a href="SignUp.html">Register</a>
          </div>
        </form>
        
      </div>
      </div>
    </>
  );
}


// const usernameInput = document.getElementById("usernameInput");
// const userpassInput = document.getElementById("userpassInput");

// function addNeonBorderUsername() {
//     usernameInput.classList.add("neon-border");
// }

// function removeNeonBorderUsername() {
//     usernameInput.classList.remove("neon-border");
// }

// function addNeonBorderPassword() {
//     userpassInput.classList.add("neon-border");
// }

// function removeNeonBorderPassword() {
//     userpassInput.classList.remove("neon-border");
// }

// usernameInput.addEventListener("focus", addNeonBorderUsername);
// usernameInput.addEventListener("blur", removeNeonBorderUsername);

// userpassInput.addEventListener("focus", addNeonBorderPassword);
// userpassInput.addEventListener("blur", removeNeonBorderPassword);


export default LogIn;
