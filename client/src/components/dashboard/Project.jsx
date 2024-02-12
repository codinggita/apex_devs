import React, {useState, useEffect} from 'react'
import '../styles/Project.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import ReviewTab from '../microComponent/ReviewTab'

const description = "Welcome to FlutterFlix, your ultimate destination for streaming the latest and greatest movies and TV shows right from your Flutter-powered device! Immerse yourself in a world of entertainment with our Netflix-inspired app, designed and developed using the power of Flutter." 
const projectTitle = "Netflix Clone by using flutter"
const projectRating = "89%"
const projectDev = "Apex User"
const projectDate = "24-5-2024"
const projectTechList = ["Dart", "HTML", "Java", "ReactJS","Dart"]

function Project() {
    const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
  
    useEffect(() => {
      const fetchProjectDetails = async () => {
        try {
          const response = await axios.get(`${domain}/project/${projectId}`);
          setProject(response.data);
        } catch (error) {
          console.error('Error fetching project details:', error);
        }
      };
  
      fetchProjectDetails();
    }, [projectId]);
  
    if (!project) {
      return <div>Loading project details...</div>;
    }


  return (
    <div>
        <div className='project-body'>
            <div className='project-title'><h2>{project.title}</h2></div>
                
                {/*-----------PROJECT CARD---------- */}
                <div className="project-card">
                    <div className="project-image">
                        <img src={project.imagelink} alt="Project img" />
                    </div>
                    <div className="project-info">
                        <p>{description}</p>
                        <div className='project-rating project-info-title'>All Reviews: <h6>{projectRating}</h6></div>
                        <div className='project-developer project-info-title'>Developer: <h6>{projectDev}</h6></div>
                        <div className='project-date project-info-title'>Uploaded : {project.date}</div>
                        <div className='project-tech-used project-info-title'>
                            <h4>Tech Used:</h4> 
                            {project. technologiesUsed.map((tech, index) => (
                                <span key={index} className='project-tech-logo'>{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>


                {/* PROJECT FOLLOW BAR*/}
                <div className='project-wishlish-bar'>
                    <div className='project-wishlist-title'>You can save this project to your list and can also follow developer</div>
                    <button className="saved button">Save</button>
                    <button className="follow button">Follow</button>
                </div>


                {/* PROJECT ABOUT BAR */}
                <div className=''>
                         
                </div>
{/* 
                <div className='projecr-review-section'>
                    <ReviewTab/>
                </div> */}
        </div>
    </div>
  )
}

export default Project