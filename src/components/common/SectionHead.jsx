import Reveal from "./Reveal";

const SectionHead = ({ eyebrow, title, sub }) => (
  <Reveal className="section-head">
    <span className="eyebrow">{eyebrow}</span>
    <h2 className="section-title">{title}</h2>
    {sub && <p className="section-sub">{sub}</p>}
  </Reveal>
);

export default SectionHead;
