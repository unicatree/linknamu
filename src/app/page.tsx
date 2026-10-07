// 프로필과 링크카드 목록을 보여주는 메인 페이지
import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// 보여주기용 더미 데이터 (실제 내용으로 교체 예정)
const profile = {
  name: "홍길동",
  bio: "세계 최강 바이브코더",
  imageUrl: "/profile-placeholder.svg",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8 px-4 py-16">
      <Profile name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
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
