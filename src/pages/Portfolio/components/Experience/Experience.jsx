import React from "react";
import "./Style.css";

const Experience = ({ experiences }) => {
  const experienceElement = experiences.map((exp, index) => (
    <div key={index} className="experience">
      <div className="exp-date">{exp.dates}</div>
      <div className="exp-content">
        <div className="exp-company">{exp.company}</div>
        <div className="exp-roles">{exp.role}</div>
        <div className="exp-desc">{exp.description}</div>
        <div className="exp-skills">
          {exp.skills.map((skill, index) => (
            <span key={index} className="exp-skill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div>
        <h1 className="exp-title"> Experience </h1>
      </div>
      {experienceElement}
    </div>
  );
};

export default Experience;
