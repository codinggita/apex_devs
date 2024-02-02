import React from 'react'
import '../styles/ThreadCard.css'


function ThreadCard(title, desc) {
  return (
    <div>
        <div className='thread-container'>
            <div className='thread-title'>
                <h3>Anyone who want to join in a web dev project.</h3>
            </div>
            <div className='thread-desc'>
                <p>I am working on a website by using MERN stack. This website is for developers to find right project according to their n</p>
            </div>
        </div>
    </div>
  )
}

export default ThreadCard