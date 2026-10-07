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

## 2026-10-07 프로필을 실제 정보로 교체

- **이름·소개는 사용자 지정값.** "홍길동", "풀스택 개발자 : 요즘에는 AI 개발에 관심이 많아요".
- **사진은 비워 둠 (사용자 요청).** `Profile` 의 `imageUrl` 을 선택 항목으로 바꿨다. 값이 없으면 같은 크기의 빈 원을 그린다. 그래서 `public/profile-placeholder.svg` 는 지금 쓰이지 않는다(삭제는 사용자 확인 후).

## 2026-10-07 메인 화면 디자인 다듬기

- **폰트는 `pretendard` npm 패키지의 dynamic subset CSS 를 layout.tsx 에서 import 한다.**
  - 한글 전체가 든 가변 폰트 단일 파일은 약 2MB 라 모바일에 무겁다. dynamic subset 은 페이지에 실제로 나온 글자 구간(woff2 조각 92개 중 일부)만 내려받는다.
  - CDN `<link>` 대신 패키지로 넣어 같은 도메인에서 서빙되게 했다(외부 CDN 장애·추적 영향 없음, 버전은 package-lock 으로 고정).
  - `next/font/local` 은 파일 하나 단위라 dynamic subset 을 쓸 수 없어 택하지 않았다.
  - Geist Sans 는 쓰이지 않게 되어 제거했다. Geist Mono 는 원래대로 두었다.
- **색상은 globals.css 의 CSS 변수로 모으고 다크 모드는 변수만 바꿔 대응한다.**
  - 기존 화면이 `dark:` 클래스로 다크 모드를 지원하고 있었으므로 동작을 유지한다. 다크 모드도 같은 따뜻한 톤(짙은 코코아 브라운)으로 맞춘다. (→ 아래 "화면 모드 고정"에서 다크 모드를 없앴다.)
  - 컴포넌트에서는 `dark:` 클래스 없이 `bg-glass`, `text-muted` 같은 토큰만 쓴다.
- **배경 그라데이션은 `body::before` 고정 레이어에 그린다.**
  - 링크가 늘어 페이지가 길어져도 그라데이션이 반복되거나 늘어나지 않게 하기 위해서다. iOS Safari 는 `background-attachment: fixed` 를 무시하므로 고정 레이어 방식을 쓴다.
- **라이트 모드 보조 글자색(`--muted`)은 `#7b5f51`.** 처음 쓴 `#8c6e5f` 는 배경 대비가 약 4.1:1 로 WCAG AA 기준(4.5:1)에 못 미쳤다. 바꾼 색은 약 5.3:1 이다.
- **크기·여백 변경.** 프로필 사진 128px → 112px(`size-28`, 흰 테두리 + 그림자로 커 보이는 만큼 줄임). 좌우 여백 `px-4` → `px-6`, 프로필과 카드 사이 `gap-8` → `gap-12`, 위아래 `py-20`(sm 이상 `py-28`). 카드 간격은 `gap-4` 유지.
- **호버는 배경이 조금 밝아지고 2px 떠오르는 정도.** 떠오르는 움직임은 `motion-safe:` 로 감싸 동작 줄이기 설정 사용자에게는 빼었다.
- **주의: `npm install pretendard` 직후 이미 떠 있던 `next dev` 가 globals.css 변경을 반영하지 않았다.** 폰트 파일 수백 개가 한꺼번에 생기면서 Turbopack 파일 감시가 멈춘 것으로 보인다(로그: "waiting for the filesystem to settle"). 프로덕션 빌드에는 정상 반영되었다. 개발 서버를 재시작하면 해결된다.
- **headless Edge 색 모드 지정.** `--blink-settings=preferredColorScheme=0`(다크) / `=1`(라이트). `--force-dark-mode` 는 효과가 없고, 이 PC 는 기본이 다크로 찍힌다.

## 2026-10-07 화면 모드 고정

- **기기 설정과 상관없이 항상 크림→살구 화면 (사용자 결정).** 다크 모드를 쓰는 방문자에게도 요청한 디자인이 그대로 보여야 하므로 globals.css 의 `prefers-color-scheme: dark` 블록을 지웠다. 색은 `:root` 변수 한 벌만 남는다.
- `color-scheme` 을 선언하지 않았으므로 브라우저는 스크롤바 같은 기본 UI 도 라이트로 그린다.
