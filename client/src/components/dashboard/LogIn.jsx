import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../styles/LogIn.css";

function LogIn(){
  
  const[form, setForm] = useState({});

  const handleForm = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const response =  await fetch('http://localhost:3000/register',{
      method:'GET'

    })
    console.log(form)
  }

  return (
    <>
      <div className="login-body">
        <div className="login-container">
          <h1>Log in</h1>

          <form onSubmit={handleSubmit}>

            <div className="login-form">
              <input
                type="text"
                name = "username"
                placeholder="Username"
                className="inputClass"
                id="usernameInput"
                onChange={handleForm}
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
                onChange={handleForm}
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <div className="remember-forgot">
              <label htmlFor="rememberMe">
                <input type="checkbox" id="rememberMe" />
                Remember me
              </label>
              <Link to="/forgot_password">Forgot password?</Link>
            </div>

            <button type="submit" className="btn">
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
