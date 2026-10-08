// 메인 페이지와 클릭 수 API 가 함께 쓰는 링크 목록
export type Link = {
  // 클릭 수를 저장하는 키. URL 을 실제 주소로 바꿔도 클릭 수가 이어지도록 그대로 둔다
  id: string;
  title: string;
  url: string;
};

// 보여주기용 더미 데이터 (실제 내용으로 교체 예정)
export const links: Link[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];
