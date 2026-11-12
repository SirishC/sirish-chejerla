import data from "../../../metadata/info.json";
import SectionHead from "../common/SectionHead";
import Reveal from "../common/Reveal";
import "./styles/Skills.css";

const Skills = () => (
  <div className="container">
    <SectionHead
      eyebrow="Skills"
      title="Technical toolkit"
      sub="The languages, frameworks, and platforms I use to ship production systems."
    />
    <div className="skills-grid">
      {data.skills.map((group, i) => (
        <Reveal key={group.category} delay={i * 0.05} className="card skill-group">
          <h3>{group.category}</h3>
          <div className="tags">
            {group.items.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

export default Skills;
