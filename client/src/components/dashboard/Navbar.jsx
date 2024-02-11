import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import ApexLogo from '../../assets/ApexDevs_Logo_Temp.png';
import "../styles/Navbar.css";

function Navbar({ isAuthenticated }) {
  return (
    <div className='super-nav'>
      <div className='nav'>
        <div className='logo'>
          <img src={ApexLogo} alt="Apex" />
          <h1 className='apex'>APEX</h1>
          <h1 className='devs'>DEVS</h1>
        </div>
        <div className='nav-content'>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/community">COMMUNITY</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
          </ul>
        </div>
        <div className='side-tools'>
          {isAuthenticated ? (
            <div className='userIcon'>
              <Link to="/profile">
                <FaRegUserCircle size={35} />
              </Link>
            </div>
          ) : (
            <div className='log-button'>
              <Link to='/log_in'>
                <button className='button-login'>Log in</button>
              </Link>
              <Link to='/sign_up'>
                <button className='button-signin'>Sign Up</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
