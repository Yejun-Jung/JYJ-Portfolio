# JYJ Portfolio

신입 풀스택 개발자 정예준의 포트폴리오 웹사이트입니다.

- 배포: https://jyj-portfolio-pearl.vercel.app/
- GitHub: https://github.com/Yejun-Jung

## 소개

기획부터 배포까지 직접 해 본 프로젝트들을 한곳에 모아 보여주기 위한 사이트입니다.
소개, 기술 스택, 프로젝트, 연락처로 구성되어 있고 라이트/다크 테마를 지원합니다.

## 주요 기능

- **프로젝트 쇼케이스**: 왼쪽 목록에서 프로젝트를 고르면 오른쪽에 썸네일, 설명, 사용 기술, 링크가 나타납니다.
- **기술 스택**: 기술별 로고를 보여주고, 마우스를 올리면 해당 기술을 사용한 프로젝트가 표시됩니다.
- **미니 프로젝트**: 카드에서 배포 사이트, GitHub, Notion 링크를 바로 열 수 있습니다.
- **라이트/다크 테마**: 상단바 버튼으로 전환합니다.
- **스크롤 애니메이션**: framer-motion으로 각 섹션이 처음 나타날 때 한 번 재생됩니다.
- **문의 폼**: Formspree로 메시지를 전송합니다.
- **반응형 레이아웃**: 데스크톱, 태블릿, 모바일을 지원합니다.

## 기술 스택

| 구분 | 사용 기술 |
|---|---|
| 프레임워크 | React 19, Vite |
| 스타일 | SCSS (CSS Modules) |
| 애니메이션 | framer-motion |
| 아이콘 | react-icons |
| 배포 | Vercel |

## 실행 방법

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run lint     # 린트 검사
```

## 폴더 구조

```
src/
├─ components/
│  ├─ layout/    # Navbar, Footer
│  ├─ sections/  # Hero, About, Skills, Projects, MiniProjects, Contact
│  └─ ui/        # ProjectCard, MiniProjectCard, ThemeToggle, ScrollToTop
├─ data/         # projectsData, miniProjectsData (프로젝트 내용)
├─ assets/images # 프로젝트 썸네일
└─ styles/       # 테마, 공통 변수, 리셋
```

프로젝트 내용은 `src/data` 파일만 고치면 화면에 반영됩니다.
