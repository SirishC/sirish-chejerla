import React from "react";

const SideSection = ({ sections, handleClick, profile, activeSection }) => {
  return (
    <div>
      <div className="title">
        <div className="fields-1">
          <span className="name">{profile.firstname}</span>
          <span className="name">{profile.lastname}</span>
        </div>
        <div className="fields">
          {profile.roles.map((role, index) => (
            <span key={index} className="profile-roles">
              {role}
            </span>
          ))}
        </div>
        <div className="fields">
          <p className="moto">
            building high-performance applications for a smarter future
          </p>
        </div>
      </div>
      <div>
        <div className="resume-container">
          <button
            className="resume"
            onClick={() =>
              window.open("https://drive.google.com/file/d/1ybmvT6wFPMj-RJvs6KuEaizCsxegv5oy/view?usp=sharing", "_blank")
            }
          >
            My Resume
          </button>
        </div>
        <div className="content-list">
          {sections.map(({ id, title }) => (
            <div key={id}>
              <button
                key={id}
                style={{
                  fontSize: activeSection === id ? "2rem" : "1rem",
                  transition: "font-size 0.3s ease-in-out",
                }}
                onClick={() => handleClick(id)}
              >
                {title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideSection;
