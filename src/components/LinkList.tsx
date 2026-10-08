"use client";
// 링크카드 목록을 그리고 링크별 클릭 수를 불러오고 올리는 컴포넌트
import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { Link } from "@/data/links";

type LinkListProps = {
  links: Link[];
};

export default function LinkList({ links }: LinkListProps) {
  // 받아오기 전에는 비어 있어서 모든 카드가 0회로 보인다
  const [clicks, setClicks] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : {}))
      .then(setClicks)
      .catch(() => {}); // 받아오지 못하면 0회로 둔다
  }, []);

  function handleClick(id: string) {
    setClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    // 링크가 같은 탭에서 열려 페이지를 떠나도 요청이 끝까지 전송되게 keepalive 를 켠다
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            clicks={clicks[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
