import React from "react";
import "./Style.css";

const Projects = ({ projects }) => {
  return (
    <div className="projects-container">
      <h1 className="proj-title">Projects</h1>
      {projects.map((proj, index) => (
        <div key={index} className="project">
          <div className="proj-date">{proj.date}</div>
          <div className="proj-content">
            <div className="proj-name">{proj.title}</div>
            <div className="proj-desc">{proj.description}</div>
            {proj.link && (
              <a href={proj.link} className="proj-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
