# 링크나무 작업 맥락 노트

## 2026-10-07 프로젝트 생성

- **현재 폴더에 직접 생성.** create-next-app 은 비어 있지 않은 폴더(CLAUDE.md, PRD.md, wireframe.png)에서 실행되지 않는다. 그래서 임시 폴더에 생성한 뒤 파일을 복사했다. 겹치는 파일명은 없었다.
- **옵션 선택 근거.** CLAUDE.md 기술스택과 코드규칙을 따랐다. TypeScript, Tailwind CSS, App Router, `src/` 디렉토리(컴포넌트를 `src/components/` 에 두기 위해), ESLint, npm, import alias `@/*` 를 사용했다. React Compiler 는 요청이 없어 켜지 않았다.
- **Cache Components 기본 활성화.** `--yes` 로 생성하면서 16.4 기본값인 `cacheComponents: true`, `partialPrefetching: true` 가 `next.config.ts` 에 들어갔다. 이 설정에서는 DB 조회 같은 동적 데이터를 `<Suspense>` 로 감싸거나 `"use cache"` 로 캐시해야 한다. 클릭 수 집계를 구현할 때 `node_modules/next/dist/docs/` 의 해당 가이드를 먼저 확인한다.
- **AGENTS.md 유지.** create-next-app 기본 생성물이다. Next.js 16 API 가 학습 데이터와 다를 수 있으니 `node_modules/next/dist/docs/` 를 먼저 읽으라는 안내가 들어 있다. `next dev` 는 AGENTS.md 만 다시 쓰고 CLAUDE.md 는 건드리지 않는다(`node_modules/next/dist/server/lib/generate-agent-files.js` 에서 확인).
- **page.tsx 는 기본 화면 그대로 둠.** 프로필과 링크카드를 구현할 때 교체한다.
- **폰트.** 기본 Geist 폰트는 `latin` subset 만 쓴다. 한글은 시스템 폰트로 대체되므로 UI 작업 때 한글 폰트를 검토한다.
- **npm audit.** 설치 시 high 5건이 보고되었다. `--force` 는 breaking change 를 동반하므로 적용하지 않았다.

## 2026-10-07 메인 페이지 (프로필 + 링크카드)

- **더미 데이터는 page.tsx 상단 상수.** 사용자가 나중에 실제 내용으로 채울 예정이다. 한 파일에서 찾기 쉽도록 별도 데이터 파일 없이 `profile`, `links` 상수로 두었다. 이름과 소개는 wireframe.png 의 예시(홍길동, 세계 최강 바이브코더)를 썼다.
- **더미 사진은 로컬 SVG.** `public/profile-placeholder.svg` 를 쓴다. 외부 이미지 URL 을 쓰려면 `next.config.ts` 의 `images.remotePatterns` 설정이 필요하므로 피했다. SVG 는 next/image 가 자동으로 unoptimized 처리한다.
- **`priority` 대신 `loading="eager"`.** Next.js 16 에서 `priority` 가 deprecated 되었다. 문서는 대부분의 경우 `loading="eager"` 나 `fetchPriority="high"` 를 권한다(`node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md`).
- **레이아웃.** `max-w-md` 중앙 정렬, 좌우 `px-4`. 링크카드는 `<a target="_blank">` 로 새 탭에서 연다. 클릭 수 집계를 붙일 때 이 컴포넌트에 클릭 핸들러를 추가한다.
- **크기 조정 (사용자 요청).** 프로필 사진 96px → 128px(`h-32 w-32`), 링크카드 간격 12px → 16px(`gap-4`).

## 2026-10-07 GitHub 업로드

- **저장소.** `unicatree/linknamu` 공개 저장소. 첫 커밋 메시지는 사용자가 지정한 "init:링크나무 프로젝트 초기설정" 이다.
- **커밋 작성자 정보는 이 저장소에만 설정.** 공개 저장소라 실제 이메일 노출을 피하려고 GitHub noreply 주소(`339014802+unicatree@users.noreply.github.com`)를 쓴다. 이름은 `unicatree`. 사용자 선택에 따라 `--global` 이 아닌 저장소 로컬 설정이다. 다른 프로젝트에서는 다시 설정해야 한다.
- **스크린샷 검증 팁.** headless Edge 는 창 최소 폭이 약 500px 이라 `--window-size=390,...` 로 찍으면 잘린 화면이 나온다. 390px 폭 iframe 을 감싼 HTML 을 찍어야 실제 모바일 폭을 볼 수 있다.
- **안 쓰는 기본 SVG.** `public/` 의 next.svg, vercel.svg 는 이번 교체로 쓰이지 않게 되었다. file.svg, globe.svg, window.svg 는 원래부터 쓰이지 않았다. 삭제는 사용자 확인 후 진행한다.
