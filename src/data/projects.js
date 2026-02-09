// 프로젝트 정보 데이터 (제목, 설명, 기술, 링크 등)

const projects = [
  {
    id: 1,
    badge: '포트폴리오 웹사이트 (React)',
    period: '2025.01 (1인 개인 프로젝트)',
    title: 'JM Portfolio',
    subtitle: '개인 포트폴리오 웹사이트',
    description:
      'React 기반으로 포트폴리오를 구성하고 Vercel로 배포한 웹사이트',
    highlights: [
      '섹션 기반 단일 페이지 구성(Home/About/Skills/Projects 등)',
      'map 기반 데이터 렌더링으로 프로젝트 관리',
      'CSS Module을 활용하여 스타일 충돌 방지',
      '반응형 레이아웃 적용'
    ],
    links: [
      { label: "Site", url: "https://jm-portfolio-blush.vercel.app" },
      { label: "GitHub", url: "https://github.com/JJungMing/JM_portfolio" },
    ],
    techStack: ["React", "JavaScript", "CSS", "Vercel"],
  },

  {
    id: 2,
    badge: '단풍톤 프로젝트 (React)',
    period: '2024.11 (팀 프로젝트)',
    title: 'Klay',
    subtitle: '게임형 서비스 웹 프로젝트',
    description:
      '외국인들이 한국 생활에 적응하도록 돕는 게임형 웹사이트',
    highlights: [
      '카카오 OAuth 로그인 연동을 통한 사용자 인증 기능 개발',
      'Axios 기반 API 통신으로 사용자 및 미션 상태를 관리',
      'CSS Module을 활용하여 스타일 충돌 방지',
      'Vercel을 통한 프론트엔드 배포 및 운영 경험'
    ],
    links: [
      { label: "GitHub", url: "https://github.com/JJungMing/2024_DANPOON_FE.git" },
    ],
    techStack: ["React", "react-router-dom", "Axios", "CSS Modules", "React-Icons", "Vercel"],
  },

  {
    id: 3,
    badge: '주차 관리 시스템 (React Native)',
    period: '2025.1 ~ 2025.11 (팀 프로젝트)',
    title: 'Parking GO',
    subtitle: '주차장의 빈자리 개수를 제공하는 모바일 앱',
    description:
      '실시간으로 주차장 빈자리 정보를 확인하는 모바일 앱',
    highlights: [
      'React Native 프로젝트 구조를 구성하여 모바일 앱 개발 환경 구축',
      '카카오 Map API를 활용해 지도 화면에 마커를 표시하고, 중심 좌표 이동 및 마커 클릭 이벤트 처리',
      '주차장 상세 화면에서 즐겨찾기 추가/삭제 기능을 구현하고, 상태에 따라 아이콘을 동적으로 렌더링',
      'FlatList를 활용해 즐겨찾기 목록 화면을 구성하고, 선택 시 상세 화면으로 이동하도록 구현',
    ],
    links: [
      { label: "GitHub", url: "https://github.com/JJungMing/ParkingGo_FE.git" },
    ],
    techStack: ["React Native", "TypeScript", "React Navigation", "Kakao Map API"]
  },
];

export default projects;
