import React from "react";

const Primary = () => {
  return (
    <div>
      <div className="title">
        <div className="fields-1">
          <span className="name">{data.profile.firstname}</span>
          <span className="name">{data.profile.lastname}</span>
        </div>
        <div className="fields">
          <span className="roles">
            Software Engineer || DevOps Engineer || Frontend Developer
          </span>
        </div>
        <div className="fields">
          <p className="moto">
            building high-performance applications for a smarter future
          </p>
        </div>
      </div>
      <div>
        <div className="content-list">
          {sections.map(({ id, title }) => (
            <div key={id} className="content-item">
              <button
                key={id}
                style={{
                  fontSize: activeSection === id ? "2rem" : "1rem",
                  transition: "font-size 0.3s ease-in-out",
                }}
                onClick={() => handleSection(id)}
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
