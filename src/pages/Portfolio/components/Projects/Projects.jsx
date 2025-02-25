import React from "react";
import "./Style.css";

const Projects = ({ projects }) => {
  const projectsElement = projects.map((proj, index) => (
    <div key={index} className="projects">
      <div className="proj-date">{proj.date}</div>
      <div>
        <div className="proj-name">{proj.title}</div>
        <div className="proj-desc">{proj.description}</div>
        {/* <div className="proj link">{proj.link}</div> */}
      </div>
    </div>
  ));

  return (
    <div>
      <div>
        <h1 className="proj-title"> Projects </h1>
      </div>
      {projectsElement}
    </div>
  );
};

export default Projects;
