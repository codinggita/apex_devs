import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"
import userIcon from '../../assets/userIcon.png'

function Navbar() {
  return (
    <div>
        <div className='nav'>

            <div className='logo'>
                <h1 className='apex'>APEX</h1>
                <h1 className='devs'>DEVS</h1>
            </div>

            <div className='nav-content'>
                <ul>
                    <li> <Link to="/">HOME</Link> </li>
                    <li> <Link to="/community">COMMUNITY</Link> </li>
                    <li> <Link to="/about">ABOUT</Link> </li>
                </ul>
            </div>

            <div className='side-tools'>
                <div className="search">

                </div>
                <div className='userIcon'>
                    <Link to="/profile">
                        <img src={userIcon} alt="User Icon" className="userIcon" />
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar