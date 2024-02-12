import React from "react";
import '../styles/Sidebar.css'


function Sidebar() {
  return (
    <div>
      <div className="side-bar">
        <div className="nav-side-bar side-bar-block">
          <h2>Navigation</h2>
          <div className="side-bar-breakline"></div>
          <h3>Dashboard</h3>
          <h3>Liked</h3>
          <h3>Recently Visited</h3>
          <h3>MyProjects</h3>
        </div>
        <div className="categories-side-bar side-bar-block">
          <h2>Categories</h2>
          <div className="side-bar-breakline"></div>
          <h3>Web</h3>
          <h3>Android</h3>
          <h3>iOS</h3>
          <h3>Ui/Ux</h3>
          <h3>Data Science</h3>
          <h3>ML</h3>
          <h3>C/C++</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
