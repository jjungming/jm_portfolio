import React, { useState } from 'react';
import styles from './Card.module.css';
import projectImages from '../../../data/projectImages';
import Modal from '../../common/Modal/Modal';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  const openModal = (e) => {
    e.stopPropagation();
    setModalIndex(0);
    setIsModalOpen(true);
  };

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
            {images.length > 0 ? (
              <img
                src={images[0]}
                alt={`${project.title} 스크린샷 1`}
              />
            ) : (
              <span className={styles.imgPlaceholder}>이미지 없음</span>
            )}
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
        </div>
        <h5 className={styles.description}>{project.description}</h5>
        <button onClick={handleCardClick} className={styles.clickButtonFw}><IoChevronForwardOutline /></button>
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
        <button onClick={handleCardClick} className={styles.clickButtonBk}><IoChevronBackOutline /></button>
      </div>
    </div>
  );
};

export default Card;
