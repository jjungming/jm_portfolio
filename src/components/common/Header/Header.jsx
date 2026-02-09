import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { IoMenu } from "react-icons/io5";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* 로고 + 섹션 이동 네비(About, Skills, Projects 등) */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sentinel = document.getElementById("home-sentinel");
    if (!sentinel) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "skills", "archiving", "projects"];
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );
  
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 992px)");
    const handler = (e) => {
      if (!e.matches) setIsMenuOpen(false);
    };

    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleNav = (id) => {
    scrollTo(id);
    setIsMenuOpen(false);
  };

  const homeLine = isScrolled && activeSection !== "home";

  return (
    <header className={`${styles.headerContainer} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        
        {/* headerTitle 부분 */}
        <button onClick={() => scrollTo("home")} className={styles.headerTitleButton} type="button">JM's Portfolio</button>
      
        {/* headerSectionTitle 부분 */}
        <div className={styles.headerSectionTitle}>
          <button 
            onClick={() => scrollTo("about")} 
            className={`${styles.headerSectionButton} ${
              homeLine && activeSection === "about" ? styles.active : ""
            }`} 
            type="button">
              About
          </button>
          <button 
            onClick={() => scrollTo("skills")} 
            className={`${styles.headerSectionButton} ${
              homeLine && activeSection === "skills" ? styles.active : ""
            }`} 
            type="button">
              Skills
          </button>
          <button 
            onClick={() => scrollTo("archiving")} 
            className={`${styles.headerSectionButton} ${
              homeLine && activeSection === "archiving" ? styles.active : ""
            }`} 
            type="button">
              Archiving
          </button>
          <button 
            onClick={() => scrollTo("projects")} 
            className={`${styles.headerSectionButton} ${
              homeLine && activeSection === "projects" ? styles.active : ""
            }`} 
            type="button">
              Projects
          </button>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <IoMenu/>
        </button>
      </div>

      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ""}`}>
        <button onClick={() => handleNav("about")} className={styles.mobileNavButton} type="button">About</button>
        <button onClick={() => handleNav("skills")} className={styles.mobileNavButton} type="button">Skills</button>
        <button onClick={() => handleNav("archiving")} className={styles.mobileNavButton} type="button">Archiving</button>
        <button onClick={() => handleNav("projects")} className={styles.mobileNavButton} type="button">Projects</button>
      </div>

    </header>
  );
};

export default Header;
