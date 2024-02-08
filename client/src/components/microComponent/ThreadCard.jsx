import React from "react";
import "../styles/ThreadCard.css";
import Image from '../../assets/images.png'

function ThreadCard(title, desc) {
  return (
    <div>
      <div className="thread-container">
        <div className="user-logo">
          <img src={Image} alt="Img" />
        </div>
        <div className="thread-info">
          <h2>Anyone who want to join in a web dev project.</h2>
          <p>
            I am working on a website by using MERN stack. This website is for
            developers to find right project according to their n
          </p>
        </div>
        <div className="thread-bottom">
          <span className="thread-date">

          </span>
          
        </div>
      </div>
    </div>
  );
}

export default ThreadCard;
