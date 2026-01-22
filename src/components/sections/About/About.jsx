import React from 'react';
import styles from './About.module.css';

/* 자기소개 섹션 */
const About = () => {
  return (
    <section id="about" className={styles.aboutContainer}>

      <div className={styles.aboutContent}>

        {/* Title */}
        <div className={styles.aboutTitle}>
          About Me
        </div>
        
        {/* 지기소개 내용 */}
        <div className={styles.aboutText}>
          이름 생년월일 위치 연락처 이메일 학력
        </div>

      </div>

    </section>
  );
};

export default About;
