import React from 'react';
import styles from './About.module.css';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import abouts from '../../../data/about';

/* 자기소개 섹션 */
const About = () => {
  return (
    <section id="about" className={styles.aboutContainer}>

      <div className={styles.aboutContent}>

        {/* Title */}
        <SectionTitle title="About Me" />           
        
        {/* 지기소개 내용 */}
        <div className={styles.aboutInfos}>
          {abouts.map((about, idx) => (
            <div className={styles.aboutInfoWrapper}>
              <div key={idx} className={styles.aboutInfo}>
                <div className={styles.aboutItemIconWrapper}>
                  <div className={styles.aboutItemIcon}>{about.icon}</div>
                </div>
              
                <div className={styles.aboutItemText}>
                  <div className={styles.aboutItemLabel}>{about.label}</div>
                  <div className={styles.aboutItemValue}>{about.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default About;
