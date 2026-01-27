import React, { useState } from 'react';
import styles from './Projects.module.css';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import projects from '../../../data/projects';
import projectImages from '../../../data/projectImages';


/* projects.js 데이터를 기반으로 카드 리스트 출력 */
const Projects = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [imgIndex, setImgIndex] = useState({});

  const handleCardClick = (projectId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const handlePrevImg = (e, projectId, images) => {
    e.stopPropagation();
    setImgIndex((prev) => {
      const current = prev[projectId] ?? 0;
      return { ...prev, [projectId]: current === 0 ? images.length - 1 : current - 1 };
    });
  };

  const handleNextImg = (e, projectId, images) => {
    e.stopPropagation();
    setImgIndex((prev) => {
      const current = prev[projectId] ?? 0;
      return { ...prev, [projectId]: (current + 1) % images.length };
    });
  };

  return (
    <section id="projects" className={styles.projectsContainer}>
      
      <div className={styles.projectsContent}>

        <SectionTitle title='Projects' />

        <div className={styles.projectList}>
          {projects.map((project) => (
            <div
              key={project.id} 
              className={`${styles.card} ${flippedCards[project.id] ? styles.flipped : ''}`}
              onClick={() => handleCardClick(project.id)}
            >
              {/* 앞면 */}
              <div className={styles.cardFront}>
                <h4 className={styles.badge}>{project.badge}</h4>
                <p className={styles.period}>{project.period}</p>
                <div className={styles.imgBox}>
                  <div className={styles.imgCollection}>
                    {projectImages[project.id]?.length ? (
                      <img
                        src={projectImages[project.id][imgIndex[project.id] ?? 0]}
                        alt={`${project.title} 스크린샷 ${(imgIndex[project.id] ?? 0) + 1}`}
                      />
                    ) : (
                      <span className={styles.imgPlaceholder}>이미지 없음</span>
                    )}
                  </div>
                  {projectImages[project.id]?.length > 1 && (
                    <div className={styles.imgNav}>
                      <button
                        type="button"
                        className={styles.imgNavBtn}
                        onClick={(e) => handlePrevImg(e, project.id, projectImages[project.id])}
                        aria-label="이전 이미지"
                      >
                        ‹
                      </button>
                      <span className={styles.imgCounter} aria-live="polite">
                        {(imgIndex[project.id] ?? 0) + 1} / {projectImages[project.id].length}
                      </span>
                      <button
                        type="button"
                        className={styles.imgNavBtn}
                        onClick={(e) => handleNextImg(e, project.id, projectImages[project.id])}
                        aria-label="다음 이미지"
                      >
                        ›
                      </button>
                    </div>
                  )}
                </div>
                <h5 className={styles.description}>{project.description}</h5>
                <button className={styles.clickButton}>클릭하여 상세 정보 보기</button>
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
            </div>
          ))}
        </div>

      </div>
      
    </section>
  );
};

export default Projects;
