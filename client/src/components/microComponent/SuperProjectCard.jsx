import React from "react";
import "../styles/SuperProjectCard.css";
import Images from "../../assets/images.png";
import Netflix from "../../assets/Netflix.png";

function SuperProjectCard({ title, description }) {
  // Return function with HTML code
  return (
    <div className="superproject-card">
      <div className="project-card-top">
        <img src={Images} alt="" />
        <h2>{title}</h2>
      </div>
      <div className="project-card-mid">
        <img src={Netflix} alt="" />
      </div>
      <div className="project-card-bottom">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SuperProjectCard;
