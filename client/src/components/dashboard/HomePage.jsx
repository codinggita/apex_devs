import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/HomePage.css";
import { Link } from "react-router-dom";
import SuperProjectCard from "../microComponent/SuperProjectCard";

const homeCategory = "Angular";

function HomePage() {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/upload").then((res) => {
      console.log(res);
      if (res.status == 201) {
        setProject(res.data);
      }
    });
  }, []);

  return (
    <div>
      <div className="super-container">
        {/* <div className="sidebar-container">
        <Sidebar/>
        </div> */}
        {/* -----------------BODY--------------- */}
        <div className="home-body">
          <div className="home-category">
            {homeCategory}
            <Link to="/upload">
              <button className="btn">+ Upload</button>
            </Link>
          </div>

          <div className="home-body-grid">
            {projects.map((project) => (
              <Link to="/project" key={project.projectId}>
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
