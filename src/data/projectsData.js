const projectsData = [
  {
    id: 4,
    category: "팀 프로젝트 · 풀스택 웹 서비스",
    title: "SmartHR PROJECT",
    description: [
      "4인 팀 협업으로 구축한 Next.js & Spring Boot 기반 풀스택 통합 인사관리(ERP) 웹 서비스로,",
      "복잡한 인사 데이터를 체계적으로 통합하고 강력한 권한 제어를 통해 업무 효율성을 극대화했습니다.",
      "일반 사원용 화면 전체 개발 및 관리자 권한별 화면 분리 로직을 프론트엔드 단에서 제어했으며,",
      "방대한 인사 데이터를 모바일 카드뷰로 변환하는 반응형 시스템을 전담했습니다."
    ],
    tags: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "TAILWIND CSS",
      "SPRING BOOT",
      "MYSQL",
      "JWT",
      "FIGMA"
    ],
    githubUrl: "https://github.com/Yejun-Jung/SmartRAD",
    notionUrl: "https://app.notion.com/p/SmartRAD-1-398d4d33801680ddac48dd346f408d9a?pvs=32",
    liveUrl: "https://smart-hr.site/",
    thumbType: "sh",
    direction: "left",
  },
  {
    id: 1,
    category: "팀 프로젝트 · 프론트엔드 단독 구현",
    title: "NexusHub PROJECT",
    description: [
      "4인 팀 협업으로 진행된 스마트 택배 허브 웹 애플리케이션으로, 프론트엔드(React, TypeScript) 환경만으로 구현된 프로젝트입니다.",
      "배송 조회 타임라인, 일반/관리자 로그인 폼, 메인 히어로 무한 슬라이더 및 반응형 공통 레이아웃 개발을 담당했습니다.",
      "Vercel 배포 과정에서 메타태그(SEO) 및 Open Graph 세팅을 주도하고, 반응형 UI 깨짐 현상 등 실무적인 트러블슈팅을 완수했습니다.",
    ],
    tags: ["REACT", "TYPESCRIPT", "VITE", "SCSS", "FIGMA", "VERCEL"],
    githubUrl: "https://github.com/seokhyeon09/TeamProject-Responsive_Logistics_System_Project",
    notionUrl: "https://notion.com/p/KDT-1-3835b18cdc3080428fa3e5d938d98c71",
    liveUrl: "https://team-project-nexus-hub.vercel.app/",
    thumbType: "nx",
    direction: "right",
  },
  {
    id: 2,
    category: "웹 애플리케이션",
    title: "SimplePaws PROJECT",
    description: [
      "사용자의 반려견과 함께하는 일상과 행복한 순간들을 기록하고 공유할 수 있는 반려견 다이어리 서비스입니다.",
      "친화적인 인터페이스와 직관적인 레이아웃을 통해 기록을 효율적으로 관리할 수 있으며,",
      "반려견 프로필 등록부터 날짜별 타임라인까지 감성적인 경험을 제공합니다.",
      "Docker 기반 컨테이너 환경으로 안정적인 배포를 구현했습니다.",
    ],
    tags: [
      "REACT",
      "DBEAVER",
      "DOCKER",
      "MYSQL",
      "AWS",
      "SPRING BOOT",
      "KAKAO_LOGIN",
      "VERCEL",
    ],
    githubUrl: "https://github.com/Yejun-Jung/SimplePaws",
    notionUrl:
      "https://www.notion.so/Simple-Paws-32f298159077804b8e29e05045aa215c?source=copy_link",
    liveUrl: "http://simplepaws.kro.kr/",
    thumbType: "sp",
    direction: "left",
  },
  {
    id: 3,
    category: "웹 애플리케이션",
    title: "TOCOBO H&M PROJECT",
    description: [
      "브랜드 '토코보'의 아이덴티티를 분석하여 사용자 경험을 중심으로 재구성한 이커머스 웹 사이트입니다.",
      "반응형 레이아웃과 직관적인 UI를 통해 브랜드 감성을 구현했으며, 실제 H&M 신상품 데이터를",
      "기반으로 카테고리별 상품 탐색 및 스타일 추천 기능을 제공합니다. Vercel을 통해 배포하여",
      "빠른 로딩과 안정적인 서비스 환경을 갖췄습니다.",
    ],
    tags: ["REACT", "AOS", "VERCEL"],
    githubUrl: "https://github.com/Yejun-Jung/H-M-tocobo",
    notionUrl:
      "https://www.notion.so/TOCOBO-31029815907780ccb2cfe60632e48dce?source=copy_link",
    liveUrl: "https://h-m-tocobo.vercel.app/",
    thumbType: "hm",
    direction: "right",
  },
];

export default projectsData;
