import React, { useEffect , useRef } from "react";
import "./Style.css";

const Sections = ({ sections, setActiveSection , sectionRefs }) => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            console.log(entry.target.id);
            setActiveSection(entry.target.id);

          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 50% of the section is visible
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);
  return (
    <div>
      {sections.map(({ id, title , page }, index) => (
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
}


export default Sections;