# 링크나무 작업 체크리스트

## 1. 프로젝트 생성
- [x] create-next-app 16.4.0 으로 스캐폴딩 (TypeScript, Tailwind, App Router, src/, ESLint, npm)
- [x] 루트 레이아웃 메타데이터를 서비스 정보로 변경, `lang="ko"`
- [x] `npm run lint` / `npm run build` 통과 확인
- [x] git 저장소 초기화
- [x] 첫 커밋 및 GitHub 공개 저장소(unicatree/linknamu) 푸시

## 2. 프로필 (PRD 핵심기능)
- [x] 프로필 컴포넌트 (`src/components/Profile.tsx`) — 이름, 한줄소개, 원형 프로필사진
- [x] 모바일 우선 레이아웃 (wireframe.png 기준, 390px 폭 스크린샷으로 확인)
- [ ] 더미 프로필(이름, 소개, 사진)을 실제 내용으로 교체 — 이름·소개 완료, 사진은 사용자 요청으로 비워 둠

## 3. 링크카드 (PRD 핵심기능)
- [x] 링크 데이터 정의 (`src/app/page.tsx` 상단 더미 GitHub / LinkedIn / Blog)
- [x] 링크카드 컴포넌트 (`src/components/LinkCard.tsx`) — 세로 나열, 새 탭으로 열기
- [ ] 더미 링크를 실제 URL 로 교체

## 4. 클릭 수 집계 (PRD 핵심기능)
- [x] `.env.local` 에 `MONGODB_URI` 설정
- [x] MongoDB 드라이버 설치, 클라이언트 재사용 모듈 (`src/lib/mongodb.ts`)
- [x] 링크 데이터를 `src/data/links.ts` 로 분리하고 링크별 고정 `id` 부여
- [x] 클릭 수 API (`src/app/api/clicks/route.ts`) — GET 전체 조회, POST 1 증가
- [x] 링크 목록 클라이언트 컴포넌트 (`src/components/LinkList.tsx`) — 처음 0회, 한 번에 받아와 갱신, 클릭 시 집계 호출
- [x] 링크카드 오른쪽에 작은 글자로 "N회" 표시
- [x] lint / build 통과, 실제 DB 로 GET·POST 동작 확인, 모바일 스크린샷 확인, 브라우저 클릭 확인 (테스트 데이터는 삭제)

## 5. 배포
- [ ] Vercel 배포 및 환경변수 등록

## 6. 메인 화면 디자인 다듬기 (새 기능 없이 모던·미니멀한 Link in Bio 분위기)
- [x] Pretendard 폰트 설치 (`pretendard` 패키지, dynamic subset CSS)
- [x] globals.css — 색상 토큰, 크림→살구 그라데이션 배경, 다크 모드 대응
- [x] layout.tsx — Pretendard 적용, 쓰지 않게 된 Geist Sans 제거
- [x] Profile.tsx — 둥글고 살짝 입체감 있는 프로필 사진, 이름·소개 타이포
- [x] LinkCard.tsx — 글래스모피즘 카드, 둥근 모서리, 절제된 호버
- [x] page.tsx — 좌우·카드 사이 여백 넉넉히
- [x] lint / build 통과
- [x] 모바일(390·360px)·데스크톱 스크린샷으로 확인 (라이트·다크)
- [x] 기기 화면 모드와 상관없이 크림→살구 화면으로 고정 (사용자 결정, 다크 모드 제거)
