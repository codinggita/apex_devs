import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making API requests
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css'

function SignUp() {
  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreement, setAgreement] = useState(false);
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate input fields
    if (!username || !email || !password || agreement!=true) {
      // Display an error message to the user
      alert('Please fill in all fields and agree to the terms.');
      return;
    }

    try {
      const response = await axios.post(`${domain}/register`, {
        username,
        email,
        password, // Ensure this is stored securely on the backend (e.g., hashed)
      });

      console.log('Signup successful:', response.data);
      navigate('/log_in');

    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-body">
      <div className="signup-container">
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <div className="signup-form">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="signup-input"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="signup-form">
            <label htmlFor="email">Email ID:</label>
            <input
              type="email"
              className="signup-input"
              id="emailInput"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="signup-form">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="signup-input"
              id="passwordInput"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="signup-terms">
            <label htmlFor="agreement">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={agreement}
                onChange={(e) => setAgreement(e.target.checked)}
                required
              />
              I agree to the <a href="https://google.com">terms and conditions.</a>
            </label>
          </div>

          <button className="signup-btn" type="submit">
            Sign Up
          </button>
        </form>

        
      </div>
    </div>
  );
}

export default SignUp;
