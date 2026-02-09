import React from 'react';
import styles from './Archiving.module.css';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import archivings from '../../../data/archiving';

/* GitHub, Blog, Notion, Resume 링크 제공 */
const Archiving = () => {
  return (
    <section id="archiving" className={styles.archivingContainer}>
      <div className={styles.archivingContent}>
        {/* 타이틀 */}
        <SectionTitle title="Archiving" />

        {/* 링크 제공 */}
        <div className={styles.archivingLinks}>
          {archivings.map((archiving, idx) => (
            <a
              key={idx}
              className={styles.archivingWrapper}
              href={archiving.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.archivingItems}>
                <div className={styles.archivingImgWrapper}>
                  <img
                    src={archiving.img}
                    alt={archiving.description}
                    className={styles.archivingImg}
                  />
                </div>
                <div className={styles.archivingURL}>{archiving.url}</div>
                <div className={styles.archivingDescription}>
                  {archiving.description}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Archiving;
