import React from 'react';
import styles from './Home.module.css';

/* 메인 화면 */
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContenet}>
        
        {/* 메인 화면 타이틀 */}
        <h1 className={styles.homeTitle}>
          프론트엔드 개발자 포트폴리오 <br/>
          - 박정민 -
        </h1>
        

        {/* 메인 화면 내용 */}
        <h2 className={styles.homeDescription}>
          안녕하세요.<br/>
          문제 해결과 협업을 중요하게 생각하는<br/>
          프론트엔드 개발자입니다.
        </h2>

        {/* 메인 화면 버튼 */}
        <button className={styles.homeButton}>더 알아보기</button>
      </div>

    </div>
  );
};

export default Home;
