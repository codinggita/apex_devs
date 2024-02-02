import React from 'react'
import '../styles/Profile.css'

const profileImage = "../../assets/images.png"
const profileName = "Apex User"
const profileUsername = "apex_user_123"

function Profile() {
  return (
    <div>
      <div className='profile-super-container'>

        <div className='profile-card'>

          <div className='profile-card-pic'>
            <img src = {profileImage} alt="Image" /> 
          </div>

          <div className='profile-card-info'>
              <div className='profile-card-name-container'>
                <div className='profile-card-name'>{profileName}</div>
                <div className='profile-card-username'>{profileUsername}</div>  
              </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Profile