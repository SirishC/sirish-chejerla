import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import data from "../../../metadata/info.json";
import SectionHead from "../common/SectionHead";
import Reveal from "../common/Reveal";
import Highlight from "../common/Highlight";
import { PinIcon } from "../common/Icons";
import "./styles/Experience.css";

const Experience = () => {
  const jobs = data.work_experience;
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <div className="container">
      <SectionHead
        eyebrow="Experience"
        title="Where I’ve worked"
        sub="Backend, automation, and cloud work across telecom networks, payroll, hardware telemetry, and contact-center platforms."
      />
      <Reveal className="exp-layout">
        <div className="exp-tabs" role="tablist" aria-label="Companies">
          {jobs.map((j, i) => (
            <button
              key={j.company}
              role="tab"
              id={`exp-tab-${i}`}
              aria-selected={active === i}
              aria-controls="exp-panel"
              className={`exp-tab ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="exp-tab-company">{j.company}</span>
              <span className="exp-tab-dates">{j.dates}</span>
            </button>
          ))}
        </div>

        <div className="card exp-panel" role="tabpanel" id="exp-panel" aria-labelledby={`exp-tab-${active}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
            >
              <div className="exp-head">
                <div>
                  <h3>
                    {job.role} <span className="exp-at">@ {job.company}</span>
                  </h3>
                  <div className="exp-sub">
                    <span>{job.dates}</span>
                    <span className="exp-sep" />
                    <span className="exp-loc">
                      <PinIcon size={13} /> {job.location}
                    </span>
                    {job.client && (
                      <>
                        <span className="exp-sep" />
                        <span>Client: {job.client}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <ul className="exp-bullets">
                {job.bullets.map((b) => (
                  <li key={b}>
                    <Highlight text={b} />
                  </li>
                ))}
              </ul>
              <div className="tags">
                {job.skills.map((s) => (
                  <span key={s} className="tag tag-accent">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </div>
  );
};

export default Experience;
