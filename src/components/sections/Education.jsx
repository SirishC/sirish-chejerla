import data from "../../../metadata/info.json";
import SectionHead from "../common/SectionHead";
import Reveal from "../common/Reveal";
import { CapIcon, PinIcon } from "../common/Icons";
import "./styles/Education.css";

const Education = () => (
  <div className="container">
    <SectionHead eyebrow="Education" title="Academic background" />
    <div className="edu-grid">
      {data.college.map((e, i) => (
        <Reveal key={e.name} delay={i * 0.08} className="card edu-card">
          <div className="edu-icon">
            <CapIcon size={20} />
          </div>
          <div>
            <span className="edu-dates">{e.dates}</span>
            <h3>{e.level}</h3>
            <p className="edu-school">{e.name}</p>
            {e.gpa && <span className="tag tag-accent edu-gpa">GPA {e.gpa}</span>}
            <p className="edu-loc">
              <PinIcon size={13} /> {e.location}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

export default Education;
