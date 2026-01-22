import React from 'react';
import styles from './Header.module.css';

/* 로고 + 섹션 이동 네비(About, Skills, Projects 등) */

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        
        {/* headerTitle 부분 */}
        <button className={styles.headerTitleButton}>JM's Portfolio</button>
      
        {/* headerSectionTitle 부분 */}
        <div className={styles.headerSectionTitle}>
          <button className={styles.headerSectionButton}>About</button>
          <button className={styles.headerSectionButton}>Skill</button>
          <button className={styles.headerSectionButton}>Archiving</button>
          <button className={styles.headerSectionButton}>Project</button>
        </div>
      </div>

    </header>
  );
};

export default Header;
