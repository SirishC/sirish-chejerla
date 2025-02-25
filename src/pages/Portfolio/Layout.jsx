import React, { useState, useEffect, useRef } from "react";
import "./Style.css";
import data from "../../../metadata/info.json";

import About from "./components/About/About";
import Sections from "./components/Sections";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import SideSection from "./components/SideSection";

const Layout = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef([]);

  const handleClick = (id) => {
    const section = sectionRefs.current.find((el) => el && el.id === id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  let sections = [
    { id: "about", title: "About", page: <About /> },
    {
      id: "experience",
      title: "Experience",
      page: <Experience experiences={data.work_experience} />,
    },
    {
      id: "projects",
      title: "Projects",
      page: <Projects projects={data.projects} />,
    },
  ];

  return (
    <div className="main">
      <div className="left">
        <SideSection
          sections={sections}
          handleClick={handleClick}
          profile={data.profile}
          activeSection={activeSection}
        />
      </div>
      <div className="right">
        <div>
          <Sections
            sections={sections}
            setActiveSection={setActiveSection}
            sectionRefs={sectionRefs}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
