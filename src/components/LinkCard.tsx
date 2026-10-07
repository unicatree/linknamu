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
      className="block w-full rounded-2xl border border-glass-border bg-glass px-6 py-4 text-center text-[15px] font-medium shadow-glass backdrop-blur-md transition duration-300 ease-out hover:bg-glass-hover motion-safe:hover:-translate-y-0.5"
    >
      {title}
    </a>
  );
}
