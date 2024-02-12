import React, { useState } from "react";
import axios from "axios";
import "../styles/UploadProject.css";
import CloudinaryImage from "./ImageUpload";

function UploadProject(props) {
  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
  const [imageUrl, setImageUrl] = useState('');

  // PROJECT
  const [project, setProject] = useState({
    title: "",
    description: "",
    imagelink: "",
    technologiesUsed: [],
    date: "" // Add date field
  });

  // HANDLE CHANGE
  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleImageUrlChange = (url) => {
    setImageUrl(url);
    setProject({ ...project, imagelink: url }); // Update project state with the image URL
  };

  // FORM SUBMISSION HANDLE
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB');
    // Update the project object with the current date
    const updatedProject = {
      ...project,
      date: formattedDate
    };

    // Submit the updated project data
    await axios
      .post(`${domain}/upload`, updatedProject)
      .then((response) => {
        console.log("Project added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error while adding project:", error);
      });
  };
  
  // TECHNOLOGY HANDLING
  const [techInput, setTechInput] = useState(""); 

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
          <CloudinaryImage
            imageUrl={imageUrl}
            setImageUrl={handleImageUrlChange} // Pass handleImageUrlChange as a callback
          />
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
          <br/>
          <br/>
          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    </div>
  );
}

export default UploadProject;
