import React from 'react';
import styles from './Home.module.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* 메인 화면 */
const Home = () => {
  return (
    <div id="home" className={styles.homeContainer}>
      <div className={styles.homeContenet}>
        
        {/* 메인 화면 타이틀 */}
        <h1 className={styles.homeTitle}>
          프론트엔드 개발자 포트폴리오 <br/>
          - 박정민 -
        </h1>
        

        {/* 메인 화면 내용 */}
        <h2 className={styles.homeDescription}>
          안녕하세요.<br/>
          사용자의 흐름을 고민하고 UI를 구현하는<br/>
          프론트엔드 개발자입니다.
        </h2>

        {/* 메인 화면 버튼 */}
        <button id="home-sentinel" onClick={() => scrollTo("about")} className={styles.homeButton} type="button">더 알아보기</button>

      </div>

    </div>
  );
};

export default Home;
