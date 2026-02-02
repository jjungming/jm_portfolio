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
      'API 연동으로 사용자 정보 및 미션 상태를 동적으로 렌더링',
      'CSS Module을 활용하여 스타일 충돌 방지',
      'Vercel을 통한 프론트엔드 배포 및 운영 경험'
    ],
    links: [
      { label: "GitHub", url: "https://github.com/JJungMing/2024_DANPOON_FE.git" },
    ],
    techStack: ["React", "react-router-dom", "Axios", "CSS Modules", "React-Icons", "Vercel"]
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
      'TypeScript를 적용해 화면 및 컴포넌트 단위 타입 안정성 확보',
      '카카오 Map API를 활용해 지도 화면에 마커를 표시하고, 중심 좌표 이동 및 마커 클릭 이벤트 처리',
      '지도 상호작용을 통해 사용자 위치 및 주차장 정보를 직관적으로 확인할 수 있는 UI 구현',
      'screens / components 구조로 화면과 UI 요소를 분리하여 유지보수성 개선',
      'navigation 구조를 설계하고 App.tsx를 중심으로 앱 진입 및 화면 전환 흐름 구현'
    ],
    links: [
      { label: "GitHub", url: "https://github.com/JJungMing/ParkingGo_FE.git" },
    ],
    techStack: [ "React Native", "TypeScript", "React Navigation", "Kakao Map API"]
  },
  // {
  //   id: 3,
  //   badge: 'Django 웹 프로젝트',
  //   period: '2024.06 (1인 개인 프로젝트)',
  //   title: 'Django Lotto',
  //   subtitle: '로또 번호 생성 웹 서비스',
  //   description:
  //     'Django를 활용해 로또 번호 생성 기능을 구현한 웹 프로젝트입니다.',
  //   highlights: [
  //     'Django MVC 구조 기반 웹 개발',
  //     'URL 라우팅과 View 로직 구현',
  //     '템플릿 렌더링을 통한 화면 구성',
  //     '기본 CRUD 흐름 학습'
  //   ],
  //   stacks: ['Python', 'Django', 'HTML', 'CSS'],
  //   links: {
  //     github: 'https://github.com/JJungMing/django_lotto',
  //     demo: ''
  //   }
  // },

  // {
  //   id: 4,
  //   badge: 'Django + OpenCV',
  //   period: '2024.07 (1인 개인 프로젝트)',
  //   title: 'Django OpenCV',
  //   subtitle: '이미지 처리 웹 프로젝트',
  //   description:
  //     'Django 웹 환경에서 OpenCV를 연동하여 이미지 처리 기능을 구현한 프로젝트입니다.',
  //   highlights: [
  //     'OpenCV 기반 이미지 처리 기능 구현',
  //     'Django 서버와 이미지 처리 로직 연동',
  //     '사용자 입력 → 처리 → 결과 출력 흐름 구현',
  //     'Python 외부 라이브러리 연동 경험'
  //   ],
  //   stacks: ['Python', 'Django', 'OpenCV'],
  //   links: {
  //     github: 'https://github.com/JJungMing/django_opencv',
  //     demo: ''
  //   }
  // }
];

export default projects;
