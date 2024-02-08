import React, {useState, useEffect} from "react";
import "../styles/SuperProjectCard.css";
import axios from "axios";
import Images from "../../assets/images.png";
import Netflix from "../../assets/Netflix.png"



const SuperProjectCard = () => {

  // UseState hoook is called here which will return array
  const[projectData, setProjectData] = useState(null)

  useEffect(()=>{
    
  }

  )

  // Return funtion with HTML code
  return (
    <div className="superproject-card">
      <div className="project-card-top">
        <img src={Images} alt="" />
        <h2></h2>
      </div>
      <div className="project-card-mid">
        <img src={Netflix} alt="" />
      </div>
      <div className="project-card-bottom">
        <p></p>
      </div>
    </div>
  );
};

export default SuperProjectCard;
