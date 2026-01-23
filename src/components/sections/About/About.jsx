import React from 'react';
import styles from './About.module.css';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import {
  IoPersonOutline,
  IoCalendarOutline,
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoSchoolOutline,
} from 'react-icons/io5';

const items = [
  { icon: <IoPersonOutline />, label: '이름', value: '박정민' },
  { icon: <IoCalendarOutline />, label: '생년월일', value: '2001.10.10' },
  { icon: <IoCallOutline />, label: '위치', value: '청주시 흥덕구' },
  { icon: <IoMailOutline />, label: '연락처', value: '010-7142-1213' },
  { icon: <IoLocationOutline />, label: '이메일', value: '1010pjm@naver.com' },
  { icon: <IoSchoolOutline />, label: '학력', value: '청주대학교(인공지능소프트웨어학과)' },
];

/* 자기소개 섹션 */
const About = () => {
  return (
    <section id="about" className={styles.aboutContainer}>

      <div className={styles.aboutContent}>

        {/* Title */}
        <SectionTitle title="About Me" />           
        
        {/* 지기소개 내용 */}
        <div className={styles.aboutInfos}>
          {items.map((item, idx) => (
            <div className={styles.aboutInfoWrapper}>
              <div key={idx} className={styles.aboutInfo}>
                <div className={styles.aboutItemIconWrapper}>
                  <div className={styles.aboutItemIcon}>{item.icon}</div>
                </div>
              
                <div className={styles.aboutItemText}>
                  <div className={styles.aboutItemLabel}>{item.label}</div>
                  <div className={styles.aboutItemValue}>{item.value}</div>
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
