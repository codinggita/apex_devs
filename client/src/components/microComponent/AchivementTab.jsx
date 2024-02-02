import React from 'react'
import '../styles/AchivementTab.css'
import Star from '../../assets/star.png'

function AchivementTab() {
  return (
    <div>
        <div className='achivement-container'>
            <div className='achivemnet-logo'>
                <img src={Star} alt="IMG" />
            </div>
            <div className='achivement-text-container'>
                <div className='achivement-title'>
                    <h3>Streak Master</h3>
                </div>
                <div className='achivement-desc'>
                    <p>Max streak days: 24</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AchivementTab