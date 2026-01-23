import React from 'react';
import styles from './Projects.module.css';
import SectionTitle from '../../common/SectionTitle/SectionTitle';


/* projects.js 데이터를 기반으로 카드 리스트 출력 */
const Projects = () => {
  return (
    <section id="projects" className={styles.projectsContainer}>
      
      <div className={styles.projectsContent}>

        <SectionTitle title='Projects' />

        <div className={styles.projectsItems}>
          Projects
        </div>

      </div>
      
    </section>
  );
};

export default Projects;
