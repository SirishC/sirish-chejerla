import data from "../../../metadata/info.json";
import SectionHead from "../common/SectionHead";
import Reveal from "../common/Reveal";
import "./styles/About.css";

const About = () => {
  const { summary, focus } = data.profile;
  return (
    <div className="container">
      <SectionHead eyebrow="About" title="Engineering systems that scale — and stay up." />
      <div className="about-grid">
        <Reveal className="about-text">
          {summary.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <div className="focus-grid">
          {focus.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06} className="card focus-card">
              <span className="focus-index">0{i + 1}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
