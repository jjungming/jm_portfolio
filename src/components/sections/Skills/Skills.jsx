import React from 'react';
import styles from './Skills.module.css';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import skills from '../../../data/skills';

/* Frontend / Backend / Tools 등 기술 카드 렌더링 */
const Skills = () => {
  return (
    <section id="skills" className={styles.skillsContainer}>
      
      <div className={styles.skillsContent}>
        {/* 타이틀 */}
        <SectionTitle title='Skills' />
      
        {/* 스킬 내용 */}
        <div className={styles.skillsDescription}>
          {skills.map((skill) => (
            <div key={skill.title} className={styles.skillSet}>
              <div className={styles.skillName}>
                <img
                  src={skill.image}
                  alt={`${skill.title} 아이콘`}
                  className={styles.skillIcon}
                />
                <span>{skill.title}</span>
              </div>

              <ul className={styles.skillTags}>
                {skill.items.map((item) => (
                  <li key={item} className={styles.tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}          
        </div>
        
      </div>

    </section>
  );
};

export default Skills;
