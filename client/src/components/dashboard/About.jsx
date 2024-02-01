import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <>
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

      <div className='slogan'>
        For Developers By Developers
      </div>

      <div className='breakline'></div>

      <div className='about-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas id ex unde magni, sit, vero culpa officiis, soluta excepturi illum. Saepe incidunt asperiores ipsa quaerat placeat expedita, dicta eligendi!
      </div>

      {/*  */}

    </div>
    </>
  )
}

export default About