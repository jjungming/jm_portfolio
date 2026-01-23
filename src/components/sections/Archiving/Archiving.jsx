import React from 'react';
import styles from './Archiving.module.css';
import SectionTitle from '../../common/SectionTitle/SectionTitle';

import GitImg from '../../../img/Archiving/github-icon-remove.png';

/* GitHub, Blog, Notion, Resume 링크 제공 */
const Archiving = () => {
  return (
    <section id="archiving" className={styles.archivingContainer}>
      
      <div className={styles.archivingContent}>
        
        {/* 타이틀 */}
        <SectionTitle title='Archiving' />

        {/* 링크 제공 */}
        <a className={styles.archivingWrapper} href='https://github.com/JJungMing'>
          <div className={styles.archivingItems}>
            <div className={styles.archivingImgWrapper}><img src={GitImg} alt="GitHub 이미지" className={styles.archivingImg} /></div>
            <div className={styles.archivingURL}>https://github.com/JJungMing</div>
            <div className={styles.archivingDescription}>소스코드 저장소</div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Archiving;
