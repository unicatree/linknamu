// 클릭하면 새 탭으로 링크를 열고 오른쪽에 클릭 수를 보여주는 카드 컴포넌트
type LinkCardProps = {
  title: string;
  url: string;
  clicks: number;
  onClick: () => void;
};

export default function LinkCard({ title, url, clicks, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      // 양쪽 칸 폭을 같게 해서 제목은 카드 가운데, 클릭 수는 오른쪽 끝에 둔다
      className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl border border-glass-border bg-glass px-6 py-4 text-center text-[15px] font-medium shadow-glass backdrop-blur-md transition duration-300 ease-out hover:bg-glass-hover motion-safe:hover:-translate-y-0.5"
    >
      <span className="col-start-2">{title}</span>
      <span className="justify-self-end text-xs font-normal whitespace-nowrap text-muted tabular-nums">
        {clicks}회
      </span>
    </a>
  );
}
