import React from 'react';
import './Navbar.css'

export default function Navbar(){
    const logoText = "APEXDEVS";
    return(
        <div className='nav'>
            <h2 className='logo'>{logoText}</h2>
        </div>
    )
}