const projectsData = [
  {
    id: 1,
    category: "웹 애플리케이션",
    title: "TOCOBO H&M PROJECT",
    description: [
      "브랜드 '토코보'의 아이덴티티를 분석하여 사용자 경험을 중심으로 재구성한 이커머스 웹 사이트입니다.",
      "반응형 레이아웃과 직관적인 UI를 통해 브랜드 감성을 구현했으며, 실제 H&M 신상품 데이터를",
      "기반으로 카테고리별 상품 탐색 및 스타일 추천 기능을 제공합니다. Vercel을 통해 배포하여",
      "빠른 로딩과 안정적인 서비스 환경을 갖췄습니다.",
    ],
    tags: ["REACT", "VERCEL"],
    githubUrl: "https://github.com/Yejun-Jung/H-M-tocobo",
    liveUrl: "https://h-m-tocobo.vercel.app/",
    thumbType: "hm",
    direction: "left",
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
    tags: ["REACT", "DBEAVER", "DOCKER"],
    githubUrl: "https://github.com/Yejun-Jung/SimplePaws",
    liveUrl: "#",
    thumbType: "sp",
    direction: "right",
  },
];

export default projectsData;