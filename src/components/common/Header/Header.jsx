import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* 로고 + 섹션 이동 네비(About, Skills, Projects 등) */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`${styles.headerContainer} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        
        {/* headerTitle 부분 */}
        <button onClick={() => scrollTo("home")} className={styles.headerTitleButton}>JM's Portfolio</button>
      
        {/* headerSectionTitle 부분 */}
        <div className={styles.headerSectionTitle}>
          <button onClick={() => scrollTo("about")} className={styles.headerSectionButton}>About</button>
          <button onClick={() => scrollTo("skills")} className={styles.headerSectionButton}>Skills</button>
          <button onClick={() => scrollTo("archiving")} className={styles.headerSectionButton}>Archiving</button>
          <button onClick={() => scrollTo("projects")}className={styles.headerSectionButton}>Projects</button>
        </div>
      </div>

    </header>
  );
};

export default Header;
