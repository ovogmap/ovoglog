# 저장소 지침

## 프로젝트 구조 및 모듈 구성

이 저장소는 Next.js App Router 프로젝트입니다. 라우트는 `src/app`, 공용 UI는 `src/components`, 콘텐츠 헬퍼는 `src/lib`에 둡니다. 블로그 글은 `content/posts` 아래의 MDX 파일입니다. Velite는 생성 데이터를 `.velite`에, 처리된 에셋을 `public/static`에 출력합니다. 직접 서빙되는 정적 파일은 `public`에 둡니다.

주요 경로:

- `src/app/page.tsx` 및 `src/app/posts/*`: 페이지 라우트.
- `src/components/*.tsx`: 재사용 가능한 React 컴포넌트.
- `content/posts/*.mdx`: Velite frontmatter가 포함된 글 콘텐츠.
- `velite.config.ts`: 콘텐츠 스키마와 생성 출력 설정.

## 빌드, 테스트, 개발 명령어

체크인된 `pnpm-lock.yaml`과 맞추기 위해 pnpm을 사용합니다.

- `pnpm dev`: 로컬 Next.js 개발 서버를 실행합니다.
- `pnpm build`: 프로덕션 빌드를 만들고 생성된 콘텐츠를 검증합니다.
- `pnpm start`: `pnpm build` 이후 프로덕션 빌드를 서빙합니다.
- `pnpm lint`: Next.js core web vitals 및 TypeScript 규칙으로 ESLint를 실행합니다.

아직 전용 테스트 스크립트는 없습니다. `pnpm lint`와 `pnpm build`를 필수 PR 검증 절차로 취급합니다.

## 코딩 스타일 및 명명 규칙

기존 파일과 맞춰 TypeScript 및 React 코드는 2칸 들여쓰기, 큰따옴표, 세미콜론을 사용해 작성합니다. React 컴포넌트는 PascalCase, 라우트 폴더는 소문자로 이름 짓고, 동적 라우트는 `src/app/posts/[slug]/page.tsx`처럼 대괄호 구문을 사용합니다.

여러 라우트에서 UI를 재사용할 때는 `src/components`에 작은 컴포넌트로 분리하는 방식을 선호합니다. 콘텐츠 파싱과 글 조회 로직은 `src/lib`에 둡니다.

## 콘텐츠 지침

글은 반드시 `content/posts`에 두고 `.mdx` 확장자를 사용해야 합니다. Frontmatter는 Velite 스키마를 충족해야 합니다. `title`, `date`, `slug`는 필수이고 `description`, `tags`는 선택 항목입니다. 날짜는 `date: 2026-04-25`처럼 ISO 형식을 사용하고, slug는 URL에 안전한 소문자로 작성합니다.

## 테스트 지침

단위 테스트나 통합 테스트 프레임워크는 설정되어 있지 않습니다. 라우팅, 콘텐츠, 공용 컴포넌트를 변경할 때는 `pnpm build`를 실행해 타입, MDX, Next.js 빌드 문제를 잡습니다. 스타일과 프레임워크 규칙 검사를 위해 `pnpm lint`를 실행합니다. 나중에 테스트를 추가한다면 대상 코드 가까이나 `tests` 아래에 배치하고, 명령어를 `package.json`에 추가합니다.

## 커밋 및 풀 리퀘스트 지침

현재 기록은 `first commit`처럼 짧고 단순한 커밋 메시지를 사용합니다. 앞으로도 `add post index metadata`처럼 간결한 명령형 메시지를 사용합니다.

풀 리퀘스트에는 간단한 요약, 실행한 검증 명령어, 눈에 보이는 UI 변경이 있을 경우 스크린샷을 포함해야 합니다. 관련 이슈가 있다면 연결합니다. 콘텐츠 스키마 변경은 모든 MDX 글에 영향을 줄 수 있으므로 반드시 명시합니다.
