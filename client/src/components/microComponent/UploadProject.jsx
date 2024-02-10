import React, { useState } from "react";
import axios from "axios";
import "../styles/UploadProject.css";
import CloudinaryImage from "./ImageUpload";

function UploadProject() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    imageLink: "",
    technologiesUsed: [], // Initialize as an empty array
  });

  const [techInput, setTechInput] = useState(""); // State to manage the input for technologies

  // HANDLE CHANGE_______________________
  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  // TECHNOLOGY HANDELING______________
  const handleTechInputChange = (e) => {
    setTechInput(e.target.value);
  };
  const handleAddTech = () => {
    if (techInput.trim() !== "") {
      setProject({
        ...project,
        technologiesUsed: [...project.technologiesUsed, techInput.trim()],
      });
      setTechInput("");
    }
  };
  const handleRemoveTech = (index) => {
    const updatedTechUsed = [...project.technologiesUsed];
    updatedTechUsed.splice(index, 1);
    setProject({ ...project, technologiesUsed: updatedTechUsed });
  };

  // FORM SUBMISSION HANDLE_____________
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
          <CloudinaryImage />
          <br />
          <br />

          <div>
            <label htmlFor="technologiesUsed">Technologies Used:</label>
            <br />
            <div className="tags-container">
              {project.technologiesUsed.map((tech, index) => (
                <div key={index} className="tag">
                  {tech}
                  <button type="button" onClick={() => handleRemoveTech(index)}>
                    &#10060;
                  </button>
                </div>
              ))}
              <input
                className="inputClassProject"
                type="text"
                id="technologiesUsed"
                name="technologiesUsed"
                value={techInput}
                onChange={handleTechInputChange}
                onBlur={handleAddTech}
                placeholder="Add technologies..."
              />
            </div>
          </div>

          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    </div>
  );
}

export default UploadProject;
