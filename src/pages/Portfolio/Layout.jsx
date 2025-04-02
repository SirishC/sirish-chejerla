import React, { useState, useEffect, useRef } from "react";
import "./Style.css";
import data from "../../../metadata/info.json";

import About from "../../components/sections/About";
import Sections from "./components/Sections";
import Experience from "../../components/sections/Experience";
import Projects from "../../components/sections/Projects";
import SideSection from "./components/SideSection";

const Layout = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isResponsiveView, setIsResponsiveView] = useState(
    window.innerWidth < 1024
  );
  const sectionRefs = useRef([]);
  const rightDivRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsiveView(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleClick = (id) => {
    const section = sectionRefs.current.find((el) => el && el.id === id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLeftScroll = (event) => {
    console.log("scrolling in left-div");
    if (!isResponsiveView && rightDivRefs.current) {
      rightDivRefs.current.scrollTop += event.deltaY;
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
      <div className="left-div" onWheel={handleLeftScroll}>
        <div className="filler">
          <SideSection
            sections={sections}
            handleClick={handleClick}
            profile={data.profile}
            activeSection={activeSection}
            isResponsiveView={isResponsiveView}
          />
        </div>
        <div>
          {!isResponsiveView && (
            <footer>
              <p>
                This portfolio is under construction 🛠️ - Built by Sirish
                Chejerla
              </p>
            </footer>
          )}
        </div>
      </div>
      <div className="right-div" ref={rightDivRefs}>
        <div>
          <Sections
            sections={sections}
            setActiveSection={setActiveSection}
            sectionRefs={sectionRefs}
          />
        </div>
        <div className="filler">

        </div>
        <div>
          {isResponsiveView && (
            <footer>
              <p>
                This portfolio is under construction 🛠️ - Built by Sirish
                Chejerla
              </p>
            </footer>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
