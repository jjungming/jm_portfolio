import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ title }) => {
  return (
    <div className={styles.sectionTitleContainer}>
      
      <h3 className={styles.sectionTitle}>
        {title}
      </h3>

    </div>
    
  );
};

export default SectionTitle;
