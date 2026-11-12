import { useState } from "react";
import data from "../../../metadata/info.json";
import Reveal from "../common/Reveal";
import { MailIcon, CopyIcon, CheckIcon, LinkedinIcon, GithubIcon, CodeIcon, PhoneIcon, DownloadIcon } from "../common/Icons";
import "./styles/Contact.css";

const Contact = () => {
  const p = data.profile;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(p.email_personal);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${p.email_personal}`;
    }
  };

  const links = [
    { label: "LinkedIn", href: p.linkedin, icon: LinkedinIcon },
    { label: "GitHub", href: p.github, icon: GithubIcon },
    { label: "LeetCode", href: p.leetcode, icon: CodeIcon },
  ];

  return (
    <div className="container">
      <Reveal className="contact-panel">
        <div className="contact-copy">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let’s build something reliable.</h2>
          <p className="section-sub">
            I’m happy to talk about backend, cloud, or AI engineering roles and interesting problems. The fastest way to
            reach me is email.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${p.email_personal}`} className="btn btn-primary">
              <MailIcon size={16} /> {p.email_personal}
            </a>
            <button className="btn btn-ghost" onClick={copyEmail} aria-live="polite">
              {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
        </div>

        <div className="contact-side">
          {links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Icon /> <span>{label}</span>
            </a>
          ))}
          <a href={`tel:${p.phone_code}${p.phone}`} className="contact-link">
            <PhoneIcon /> <span>{p.phone_code} {p.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}</span>
          </a>
          <a href={p.resume} download className="contact-link">
            <DownloadIcon /> <span>Resume (PDF)</span>
          </a>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
