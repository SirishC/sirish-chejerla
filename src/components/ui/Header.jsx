import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, CloseIcon, SunIcon, MoonIcon, DownloadIcon } from "../common/Icons";
import data from "../../../metadata/info.json";
import "./styles/Header.css";

const Header = ({ sections, activeSection, theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const { firstname, lastname, resume } = data.profile;

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#hero" className="brand" aria-label="Back to top">
          <span className="brand-mark">
            {firstname[0]}
            {lastname[0]}
          </span>
          <span className="brand-name">
            {firstname} {lastname}
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          {sections.map(({ id, title }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? "active" : ""}`}
              aria-current={activeSection === id ? "true" : undefined}
            >
              {title}
              {activeSection === id && (
                <motion.span layoutId="nav-pill" className="nav-pill" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
              )}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href={resume} download className="btn btn-primary btn-sm header-resume">
            <DownloadIcon size={15} /> Resume
          </a>
          <button
            className="icon-btn menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            aria-label="Mobile"
          >
            {sections.map(({ id, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`mobile-link ${activeSection === id ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {title}
              </a>
            ))}
            <a href={resume} download className="btn btn-primary mobile-resume">
              <DownloadIcon size={16} /> Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
