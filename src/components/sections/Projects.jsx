import data from "../../../metadata/info.json";
import SectionHead from "../common/SectionHead";
import Reveal from "../common/Reveal";
import Highlight from "../common/Highlight";
import { ArrowUpRightIcon } from "../common/Icons";
import "./styles/Projects.css";

const Projects = () => (
  <div className="container">
    <SectionHead
      eyebrow="Projects"
      title="Selected work"
      sub="Research and builds from my graduate work at Purdue — real-time systems and distributed clock synchronization."
    />
    <div className="projects-grid">
      {data.projects.map((p, i) => {
        const Wrapper = p.link ? "a" : "div";
        return (
          <Reveal key={p.title} delay={i * 0.06} className={`project-wrap ${p.featured ? "featured" : ""}`}>
            <Wrapper
              className="card card-hover project-card"
              {...(p.link ? { href: p.link, target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <div className="project-top">
                <span className="project-num">{String(i + 1).padStart(2, "0")}</span>
                {p.featured && <span className="tag tag-accent">Featured</span>}
                {p.link && <ArrowUpRightIcon className="project-arrow" />}
              </div>
              <h3>{p.title}</h3>
              <p className="project-tagline">{p.tagline}</p>
              {p.context && <p className="project-context">{p.context}</p>}
              <ul className="project-bullets">
                {p.bullets.map((b) => (
                  <li key={b}>
                    <Highlight text={b} />
                  </li>
                ))}
              </ul>
              <div className="tags project-tags">
                {p.technologies.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <span className="project-cta">
                  View live app <ArrowUpRightIcon size={14} />
                </span>
              )}
            </Wrapper>
          </Reveal>
        );
      })}
    </div>
  </div>
);

export default Projects;
