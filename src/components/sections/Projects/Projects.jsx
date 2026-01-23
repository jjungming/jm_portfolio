import React from 'react';
import styles from './Projects.module.css';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import projects from '../../../data/projects';


/* projects.js 데이터를 기반으로 카드 리스트 출력 */
const Projects = () => {
  return (
    <section id="projects" className={styles.projectsContainer}>
      
      <div className={styles.projectsContent}>

        <SectionTitle title='Projects' />

        <div className={styles.projectList}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              {/* 이미지
              <img
                src={project.image}
                alt={project.title}
                className={styles.thumbnail}
              /> */}

              {/* 뱃지 */}
              <span className={styles.badge}>{project.badge}</span>

              {/* 제목 */}
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.period}>{project.period}</p>

              {/* 설명 */}
              <p className={styles.description}>{project.description}</p>

              {/* 핵심 포인트 */}
              <ul className={styles.highlights}>
                {project.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* 기술 스택 */}
              <div className={styles.stacks}>
                {project.stacks.map((stack, idx) => (
                  <span key={idx} className={styles.stack}>
                    {stack}
                  </span>
                ))}
              </div>

              {/* 링크 */}
              <div className={styles.links}>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
      
    </section>
  );
};

export default Projects;
