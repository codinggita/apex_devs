import React, { useState } from "react";
import axios from "axios";
import "../styles/UploadProject.css";

function UploadProject() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    imageLink: "",
    technologiesUsed: "",
  });


  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/upload", project)
      .then((response) => {
        console.log("Project added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error while adding project:", error);
      });

  };

  return (
    <div className="projectUploadBody">
      <div className="project-login-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            className="inputClassProject"
            type="text"
            id="title"
            name="title"
            value={project.title}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            id="description"
            name="description"
            rows="4"
            cols="50"
            value={project.description}
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <br />

          <label htmlFor="imageLink">Image Link:</label>
          <br />
          <input
            className="inputClassProject"
            type="text"
            id="imageLink"
            name="imageLink"
            value={project.imageLink}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="technologiesUsed">Technologies Used:</label>
          <br />
          <input
            className="inputClassProject"
            type="text"
            id="technologiesUsed"
            name="technologiesUsed"
            value={project.technologiesUsed}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    </div>
  );
}

export default UploadProject;
