import React, { useState, useEffect, useRef } from "react";
import "./Style.css"
import data from "../../../metadata/info.json"
import About from "./components/About/About";

import Sections from "./components/Sections";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

const Layout = () => {

    const [activeSection, setActiveSection] = useState(null);
    const sectionRefs = useRef([]);

    const handleClick = (id) => {
        console.log("Clicked "+id)
        const section = sectionRefs.current.find((el) => el && el.id === id);
        if (section) {
          const offset = section.getBoundingClientRect().top + window.scrollY - (window.innerHeight * 0.8);
          section.scrollIntoView({top: offset, behavior: "smooth", block: "start" });
        }
      };
   
    let sections = [
        { id: "about", title: "About" , page:<About/> },
        { id: "experience", title: "Experience",page:<Experience/> },
        { id: "projects", title: "Projects",page:<Projects/> },
    ];

   
    return (
        <div className="main">
            <div className="left">
                <div>
                    <div className="title">
                        <div className="fields-1">
                            <span className="name">{data.profile.firstname}</span>
                            <span className="name">{data.profile.lastname}</span>
                        </div>
                        <div className="fields">
                            <span className="roles">Software Engineer || DevOps Engineer || Frontend Developer </span>
                        </div>
                        <div className="fields">
                            <p className="moto">building high-performance applications for a smarter future</p>
                        </div>
                    </div>
                    <div>
                        <div className="content-list">
                            {sections.map(({ id, title }) => (
                                <div>
                                <button
                                    key={id}
                                    style={{
                                        fontSize: activeSection === id ? "2rem" : "1rem",
                                        transition: "font-size 0.3s ease-in-out",
                                    }}
                                    onClick={()=>handleClick(id)}

                                >
                                    {title}
                                </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
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