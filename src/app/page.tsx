// 프로필과 링크카드 목록을 보여주는 메인 페이지
import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import { links } from "@/data/links";

// 보여주기용 더미 데이터 (실제 내용으로 교체 예정)
const profile = {
  name: "홍길동",
  bio: "풀스택 개발자 : 요즘에는 AI 개발에 관심이 많아요",
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-12 px-6 py-20 sm:py-28">
      <Profile name={profile.name} bio={profile.bio} />
      <LinkList links={links} />
    </main>
  );
}
