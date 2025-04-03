import React from "react";
import "./styles/Experience.css";

const Experience = ({ experiences }) => {
  return (
    <div className="experience-container">
      <h1 className="exp-title">Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="experience">
          <div className="exp-date">{exp.dates}</div>
          <div className="exp-content">
            <div className="exp-company">{exp.company}</div>
            <div className="exp-roles">{exp.role}</div>
            <div className="exp-desc">{exp.description}</div>
            <div className="exp-skills">
              {exp.skills.map((skill, i) => (
                <span key={i} className="exp-skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
