import { useEffect, useState } from "react";
import "./styles/Portfolio.css";
import data from "../../metadata/info.json";
import Header from "../components/ui/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";

const SECTIONS = [
  { id: "about", title: "About", Component: About },
  { id: "experience", title: "Experience", Component: Experience },
  { id: "projects", title: "Projects", Component: Projects },
  { id: "skills", title: "Skills", Component: Skills },
  { id: "education", title: "Education", Component: Education },
  { id: "contact", title: "Contact", Component: Contact },
];

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  // Scroll-spy: mark the section crossing the upper-middle of the viewport as active.
  useEffect(() => {
    const els = ["hero", ...SECTIONS.map((s) => s.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id === "hero" ? "" : e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const { firstname, lastname } = data.profile;

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header
        sections={SECTIONS}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />
      <main id="main">
        <section id="hero">
          <Hero />
        </section>
        {SECTIONS.map(({ id, Component }) => (
          <section key={id} id={id} className="section">
            <Component />
          </section>
        ))}
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {firstname} {lastname}
          </span>
          <a href="#hero">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
