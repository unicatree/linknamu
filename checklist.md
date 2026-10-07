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
- [ ] 더미 프로필(이름, 소개, 사진)을 실제 내용으로 교체

## 3. 링크카드 (PRD 핵심기능)
- [x] 링크 데이터 정의 (`src/app/page.tsx` 상단 더미 GitHub / LinkedIn / Blog)
- [x] 링크카드 컴포넌트 (`src/components/LinkCard.tsx`) — 세로 나열, 새 탭으로 열기
- [ ] 더미 링크를 실제 URL 로 교체

## 4. 클릭 수 집계 (PRD 핵심기능)
- [ ] MongoDB 드라이버 설치, `.env.local` 에 `MONGODB_URI` 설정
- [ ] 클릭 기록 API (Route Handler)
- [ ] 링크카드 클릭 시 집계 호출

## 5. 배포
- [ ] Vercel 배포 및 환경변수 등록
