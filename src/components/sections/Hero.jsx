import { motion } from "framer-motion";
import data from "../../../metadata/info.json";
import { DownloadIcon, GithubIcon, LinkedinIcon, CodeIcon, PinIcon, ArrowUpRightIcon } from "../common/Icons";
import CountUp from "../common/CountUp";
import "./styles/Hero.css";

// Hero content is visible from the first frame; it only settles into place (no fade from blank).
const settle = { duration: 0.5, ease: [0.21, 0.6, 0.35, 1] };
const fade = (delay) => ({
  initial: { y: 10 },
  animate: { y: 0 },
  transition: { ...settle, delay },
});

const Hero = () => {
  const { profile, highlights, work_experience } = data;
  const current = work_experience[0];

  return (
    <div className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.div className="status-chip" {...fade(0.05)}>
              <span className="status-dot" />
              {current.role} at {current.company}
              {current.client ? ` · ${current.client}` : ""}
            </motion.div>

            <motion.h1 className="hero-name" {...fade(0.12)}>
              {profile.firstname} {profile.lastname}
            </motion.h1>

            <motion.p className="hero-title" {...fade(0.18)}>
              {profile.title}
              <span className="hero-roles">
                {profile.roles.map((r) => (
                  <span key={r}>{r}</span>
                ))}
              </span>
            </motion.p>

            <motion.p className="hero-headline" {...fade(0.24)}>
              {profile.headline}
            </motion.p>

            <motion.div className="hero-cta" {...fade(0.3)}>
              <a href={profile.resume} download className="btn btn-primary">
                <DownloadIcon size={16} /> Download Resume
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch <ArrowUpRightIcon size={16} />
              </a>
            </motion.div>

            <motion.div className="hero-meta" {...fade(0.36)}>
              <span className="hero-location">
                <PinIcon size={15} /> {profile.location_city}, {profile.location_state}
              </span>
              <span className="hero-divider" />
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a className="icon-btn" href={profile.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                <CodeIcon />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="code-card"
            {...fade(0.1)}
            aria-hidden="true"
          >
            <div className="code-bar">
              <span /><span /><span />
              <em>engineer.ts</em>
            </div>
            <pre className="code-body">
<span className="c-k">const</span> <span className="c-v">sirish</span> = {"{"}
{"\n  "}<span className="c-p">role</span>: <span className="c-s">{`"${profile.title}"`}</span>,
{"\n  "}<span className="c-p">currently</span>: <span className="c-s">{`"${current.company} · ${current.client}"`}</span>,
{"\n  "}<span className="c-p">focus</span>: [
{"\n    "}<span className="c-s">{`"backend services & APIs"`}</span>,
{"\n    "}<span className="c-s">{`"automation platforms"`}</span>,
{"\n    "}<span className="c-s">{`"real-time monitoring"`}</span>,
{"\n  "}],
{"\n  "}<span className="c-p">stack</span>: [<span className="c-s">{`"Python"`}</span>, <span className="c-s">{`"Java"`}</span>, <span className="c-s">{`"FastAPI"`}</span>,
{"\n          "}<span className="c-s">{`"React"`}</span>, <span className="c-s">{`"Jenkins"`}</span>, <span className="c-s">{`"Kubernetes"`}</span>],
{"\n  "}<span className="c-p">basedIn</span>: <span className="c-s">{`"${profile.location_city}, ${profile.location_state}"`}</span>,
{"\n"}{"}"};<span className="code-cursor" />
            </pre>
          </motion.div>
        </div>

        <motion.dl className="stats" {...fade(0.15)}>
          {highlights.map((h) => (
            <div className="stat" key={h.label}>
              <dt className="stat-value">
                <CountUp value={h.value} />
              </dt>
              <dd className="stat-label">{h.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
};

export default Hero;
