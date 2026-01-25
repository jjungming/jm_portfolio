// 프로젝트 정보 데이터 (제목, 설명, 기술, 링크 등)

const projects = [
  {
    id: 1,
    badge: '포트폴리오 웹사이트 (React)',
    period: '2025.01 (1인 개인 프로젝트)',
    title: 'JM Portfolio',
    subtitle: '개인 포트폴리오 웹사이트',
    description:
      '개인 프로젝트와 기술 스택을 정리하기 위해 제작한 포트폴리오 웹사이트입니다.',
    highlights: [
      'About / Skills / Projects 섹션을 컴포넌트 단위로 분리',
      'map 기반 데이터 렌더링으로 프로젝트 관리',
      'CSS Module을 활용하여 스타일 충돌 방지',
      '반응형 레이아웃 적용'
    ],
    stacks: ['React', 'JavaScript', 'CSS Module', 'Vite'],
    links: {
      github: 'https://github.com/JJungMing/JM-portfolio',
      demo: ''
    }
  },

  {
    id: 2,
    badge: '팀 프로젝트 (React)',
    period: '2024.08 - 2024.09 (팀 프로젝트)',
    title: 'Klay',
    subtitle: '팀 프론트엔드 프로젝트',
    description:
      '팀 프로젝트로 진행한 웹 서비스로, 프론트엔드 개발을 담당했습니다.',
    highlights: [
      'React 기반 UI 컴포넌트 구현',
      '화면 단위 기능 분리 및 구조 설계',
      '팀원과 협업하며 기능 단위 개발 진행',
      '사용자 흐름을 고려한 화면 구성'
    ],
    stacks: ['React', 'JavaScript', 'CSS'],
    links: {
      github: 'https://github.com/9oormthon-univ/2024_DANPOON_TEAM_56_FE',
      demo: ''
    }
  },

  {
    id: 3,
    badge: 'Django 웹 프로젝트',
    period: '2024.06 (1인 개인 프로젝트)',
    title: 'Django Lotto',
    subtitle: '로또 번호 생성 웹 서비스',
    description:
      'Django를 활용해 로또 번호 생성 기능을 구현한 웹 프로젝트입니다.',
    highlights: [
      'Django MVC 구조 기반 웹 개발',
      'URL 라우팅과 View 로직 구현',
      '템플릿 렌더링을 통한 화면 구성',
      '기본 CRUD 흐름 학습'
    ],
    stacks: ['Python', 'Django', 'HTML', 'CSS'],
    links: {
      github: 'https://github.com/JJungMing/django_lotto',
      demo: ''
    }
  },

  {
    id: 4,
    badge: 'Django + OpenCV',
    period: '2024.07 (1인 개인 프로젝트)',
    title: 'Django OpenCV',
    subtitle: '이미지 처리 웹 프로젝트',
    description:
      'Django 웹 환경에서 OpenCV를 연동하여 이미지 처리 기능을 구현한 프로젝트입니다.',
    highlights: [
      'OpenCV 기반 이미지 처리 기능 구현',
      'Django 서버와 이미지 처리 로직 연동',
      '사용자 입력 → 처리 → 결과 출력 흐름 구현',
      'Python 외부 라이브러리 연동 경험'
    ],
    stacks: ['Python', 'Django', 'OpenCV'],
    links: {
      github: 'https://github.com/JJungMing/django_opencv',
      demo: ''
    }
  }
];

export default projects;
