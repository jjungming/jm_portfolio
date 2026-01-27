import React, { useState } from 'react';
import styles from './Card.module.css';
import projectImages from '../../../data/projectImages';
import Modal from '../../common/Modal/Modal';

const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  const openModal = (e) => {
    e.stopPropagation();
    setModalIndex(imgIndex);
    setIsModalOpen(true);
  };

  // const handlePrevImg = (e) => {
  //   e.stopPropagation();
  //   const images = projectImages[project.id] || [];
  //   if (images.length === 0) return;
  //   setImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  // };

  // const handleNextImg = (e) => {
  //   e.stopPropagation();
  //   const images = projectImages[project.id] || [];
  //   if (images.length === 0) return;
  //   setImgIndex((prev) => (prev + 1) % images.length);
  // };

  const images = projectImages[project.id] || [];

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}
      
    >
      {/* 앞면 */}
      <div className={styles.cardFront}>
        <h4 className={styles.badge}>{project.badge}</h4>
        <p className={styles.period}>{project.period}</p>
        <div className={styles.imgBox}>
          <div className={styles.imgCollection} onClick={openModal}>
            <img
              src= {images[imgIndex]}
              alt={`${project.title} 스크린샷 ${imgIndex + 1}`}
            />
            {/* {images.length > 0 ? (
              <img
                src={images[imgIndex]}
                alt={`${project.title} 스크린샷 ${imgIndex + 1}`}
              />
            ) : (
              <span className={styles.imgPlaceholder}>이미지 없음</span>
            )} */}
          </div>
          <Modal
            isOpen={isModalOpen}
            title={project.title}
            images={images}
            index={modalIndex}
            onClose={() => setIsModalOpen(false)}
            onPrev={() =>
              setModalIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }
            onNext={() =>
              setModalIndex((prev) =>
                (prev + 1) % images.length
              )
            }
          />
          {/* {images.length > 1 && (
            <div className={styles.imgNav}>
              <button
                type="button"
                className={styles.imgNavBtn}
                onClick={handlePrevImg}
                aria-label="이전 이미지"
              >
                ‹
              </button>
              <span className={styles.imgCounter} aria-live="polite">
                {imgIndex + 1} / {images.length}
              </span>
              <button
                type="button"
                className={styles.imgNavBtn}
                onClick={handleNextImg}
                aria-label="다음 이미지"
              >
                ›
              </button>
            </div>
          )} */}
        </div>
        <h5 className={styles.description}>{project.description}</h5>
        <button onClick={handleCardClick} className={styles.clickButton}>클릭하여 상세 정보 보기</button>
      </div>

      {/* 뒷면 */}
      <div onClick={handleCardClick} className={styles.cardBack}>
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
  );
};

export default Card;
