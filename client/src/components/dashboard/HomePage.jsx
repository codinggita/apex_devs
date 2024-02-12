import "../styles/HomePage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SuperProjectCard from "../microComponent/SuperProjectCard";
import Sidebar from "../microComponent/Sidebar"


const homeCategory = "Projects";

function HomePage() {
  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
  const [projects, setProject] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get(`${domain}/upload`).then((res) => {
      console.log(res);
      if (res.status == 201) {
        setProject(res.data);
      }
    });
  }, []);
  
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      setIsLoggedIn(true);
    }
  })

  return (
    <div>
      <div className="super-container">
        <div className="sidebar-container">
        <Sidebar/>
        </div>
        {/* -----------------BODY--------------- */}
        <div className="home-body">
          <div className="home-category">
            {homeCategory}
            {isLoggedIn?  <Link to="/upload">
              <button className="btn">Upload</button>
            </Link>: "Log In to Uplaod"}

          </div>

          <div className="home-body-grid">
            {projects.map((project) => (
             <Link to={`/project/${project.projectId}`} key={project.projectId}>
                {console.log(project.imagelink)}
                <SuperProjectCard
                  title={project.title}
                  description={project.description}
                  imageurl = {project.imagelink}
                />
              </Link>
            ))}
          </div>
        </div>
        {/* --------------------------------------- */}
      </div>
    </div>
  );
}

export default HomePage;
