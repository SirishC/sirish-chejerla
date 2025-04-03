import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  LeetcodeIcon,
  LinkedinIcon,
} from "@hugeicons/core-free-icons";

const Title = ({
  sections,
  handleClick,
  profile,
  activeSection,
  isResponsiveView,
}) => {
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
              window.open(
                "https://drive.google.com/file/d/1ybmvT6wFPMj-RJvs6KuEaizCsxegv5oy/view?usp=sharing",
                "_blank"
              )
            }
          >
            My Resume
          </button>
        </div>
        {!isResponsiveView && (
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
        )}

        <div className="contact">
          <a href={profile.linkedin} target="_blank">
            <div className="contact-icons">
              <HugeiconsIcon
                icon={LinkedinIcon}
                size={24}
                color="currentColor"
                strokeWidth={0.5}
              />
            </div>
          </a>
          <a href={profile.github} target="_blank">
            <div className="contact-icons">
              <HugeiconsIcon
                icon={GithubIcon}
                size={24}
                color="currentColor"
                strokeWidth={0.5}
              />
            </div>
          </a>
          <a href={profile.leetcode} target="_blank">
            <div className="contact-icons">
              <HugeiconsIcon
                icon={LeetcodeIcon}
                size={24}
                color="currentColor"
                strokeWidth={0.5}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Title;
