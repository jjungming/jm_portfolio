import React, { useState } from 'react';
import styles from './Projects.module.css';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import projects from '../../../data/projects';


/* projects.js 데이터를 기반으로 카드 리스트 출력 */
const Projects = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (projectId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <section id="projects" className={styles.projectsContainer}>
      
      <div className={styles.projectsContent}>

        <SectionTitle title='Projects' />

        <div className={styles.projectList}>
          {projects.map((project) => (
            <article 
              key={project.id} 
              className={`${styles.card} ${flippedCards[project.id] ? styles.flipped : ''}`}
              onClick={() => handleCardClick(project.id)}
            >
              {/* 앞면 */}
              <div className={styles.cardFront}>
                <span className={styles.badge}>{project.badge}</span>
                <p className={styles.period}>{project.period}</p>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.clickHint}>클릭하여 상세 정보 보기</div>
              </div>

              {/* 뒷면 */}
              <div className={styles.cardBack}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.subtitle}>{project.subtitle}</p>
                
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
      
    </section>
  );
};

export default Projects;
