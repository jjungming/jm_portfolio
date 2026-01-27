// 프로젝트 이미지 관리 파일
// 각 프로젝트의 이미지들을 여기서 import하여 관리합니다.

import portfolioHome from '../img/Projects/portfolio/portfolio_home.png';
import portfolioAbout from '../img/Projects/portfolio/portfolio_about.png';
import portfolioArchiving from '../img/Projects/portfolio/portfolio_archiving.png';

// 프로젝트 ID를 키로 하는 이미지 맵
// 새로운 프로젝트 이미지를 추가할 때는 여기에 import하고 아래 맵에 추가하세요.
const projectImages = {
  1: [portfolioHome, portfolioAbout, portfolioArchiving],
  // 2: [klayImage1, klayImage2, ...],  // 예시: Klay 프로젝트 이미지 추가 시
  // 3: [djangoLottoImage1, ...],        // 예시: Django Lotto 이미지 추가 시
  // 4: [djangoOpenCVImage1, ...],      // 예시: Django OpenCV 이미지 추가 시
};

export default projectImages;
