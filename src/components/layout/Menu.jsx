import React, { useEffect, useRef } from "react";
import "./Style.css";

const Menu = ({ sections, setActiveSection, sectionRefs }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } 
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);
  return (
    <div>
      {sections.map(({ id, title, page }, index) => (
        <div
          className="sections"
          key={id}
          id={id}
          ref={(el) => (sectionRefs.current[index] = el)}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Sections;