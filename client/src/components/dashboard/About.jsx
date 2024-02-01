import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <>
    <div className='super-about-container'>
    <div className='about-container'>

      {/* LOGO */}
      <div className='about-logo'>
        <div className='about-logo-img'>
          <img src='../../assets/ApexDevs_Logo_Temp.png'></img>
        </div>
        <div className='about-logo-text'>
          <div className='about-logo-text-apex'>APEX</div>
          <div className='about-logo-text-devs'>DEVS</div>
        </div>
      </div>

      {/* SLOGAN */}
      <div className='slogan text'>
        For Developers By Developers
      </div>

      {/* lINE bREAK */}
      <div className='breakline'></div>

      {/* ABOUT */}
      <div className='about-text text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas id ex unde magni, sit, vero culpa officiis, soluta excepturi illum. Saepe incidunt asperiores ipsa quaerat placeat expedita, dicta eligendi!
      </div>

      {/* lINE bREAK */}
      <div className='breakline'></div>

      {/* CONTACT */}
      <div className='about-contact'>
        <div className='about-contact-text text'>Contact</div>
        <div className=''></div>
      </div>

    </div>
    </div>
    </>
  )
}

export default About