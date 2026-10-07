// 클릭하면 새 탭으로 링크를 여는 카드 컴포넌트
type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-center font-medium transition-colors hover:bg-zinc-100 dark:border-white/15 dark:bg-zinc-900 dark:hover:bg-zinc-800"
    >
      {title}
    </a>
  );
}
