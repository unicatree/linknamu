// 프로필과 링크카드 목록을 보여주는 메인 페이지
import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// 보여주기용 더미 데이터 (실제 내용으로 교체 예정)
const profile = {
  name: "홍길동",
  bio: "풀스택 개발자 : 요즘에는 AI 개발에 관심이 많아요",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-12 px-6 py-20 sm:py-28">
      <Profile name={profile.name} bio={profile.bio} />
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.url}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}
