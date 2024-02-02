import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"
import userIcon from '../../assets/userIcon.png'
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div>
        <div className='nav'>

            <div className='logo'>
                <img src="../../assets/ApexDevs_Logo_Temp.png" alt="" />
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
                        <FaRegUserCircle
                            size={35}
                        />
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar