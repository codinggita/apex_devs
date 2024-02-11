import React from 'react'
import '../styles/Profile.css'
import AchivementTab from '../microComponent/AchivementTab'
import profileImage from "../../assets/images.png"

const profileName = "Apex User"
const profileUsername = "apex_user_123"

const handleLogout = () => {
  // Remove authentication-related items from local storage
  localStorage.removeItem("token");
  localStorage.removeItem("isAuthenticated");
  // Redirect to the login page
  navigate("/log_in");
};


function Profile() {
  return (
    <div>
      <div className='profile-super-container'>

        <div className='profile-card'>

          <div className='profile-card-pic'>
            <img src = {profileImage} alt="Apex" /> 
          </div>

          <div className='profile-card-info'>
              <div className='profile-card-container'>
                <div className='profile-card-name-container'>
                <div className='profile-card-name'>{profileName}</div>
                <div className='profile-card-username'>{profileUsername}</div>
                </div>  
              </div>
              <div className='profile-card-bio'>
                Welcome to my profile, i am a fullstack developer
                who enjoys learning new and cutting edge technology.
              </div>
          </div>
          
        </div>

        <div className='profile-achievement-container'>
          <div className='profile-achievement-text'>
            <h3>Achivements</h3>
          </div>
          <div className='profile-achievements-bars'>
            <AchivementTab/>
            <AchivementTab/>
            <AchivementTab/>
            <AchivementTab/>
          </div>
        </div>
        <button className='btn' onClick={handleLogout}>Log Out</button> 
      </div>
    </div>
  )
}

export default Profile