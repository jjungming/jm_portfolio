// 프로젝트 이미지 관리 파일
// 각 프로젝트의 이미지들을 여기서 import하여 관리합니다.

import portfolioHome from '../img/Projects/portfolio/portfolio_home.png';
import portfolioAbout from '../img/Projects/portfolio/portfolio_about.png';
import portfolioArchiving from '../img/Projects/portfolio/portfolio_archiving.png';
import Klay_1 from '../img/Projects/Klay/Klay_1.png';
import Klay_2 from '../img/Projects/Klay/Klay_2.png';
import Klay_3 from '../img/Projects/Klay/Klay_3.png';
import Klay_4 from '../img/Projects/Klay/Klay_4.png';
import ParkingGO_1 from '../img/Projects/ParkingGo/ParkingGO_1.png';
import ParkingGO_2 from '../img/Projects/ParkingGo/ParkingGO_2.png';
import ParkingGO_3 from '../img/Projects/ParkingGo/ParkingGO_3.png';

// 프로젝트 ID를 키로 하는 이미지 맵
// 새로운 프로젝트 이미지를 추가할 때는 여기에 import하고 아래 맵에 추가하세요.
const projectImages = {
  1: [portfolioHome, portfolioAbout, portfolioArchiving],
  2: [Klay_1, Klay_2, Klay_3, Klay_4],
  3: [ParkingGO_1, ParkingGO_2, ParkingGO_3]
};

export default projectImages;
