// 원형 프로필 사진, 이름, 한줄소개를 보여주는 프로필 컴포넌트
import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

// 사진이 있든 없든 같은 원형 틀(흰 테두리 + 부드러운 그림자)을 쓴다
const avatarFrame = "size-28 rounded-full shadow-avatar ring-4 ring-glass-border";

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          width={112}
          height={112}
          loading="eager"
          className={`${avatarFrame} object-cover`}
        />
      ) : (
        <div aria-hidden="true" className={`${avatarFrame} bg-(image:--avatar)`} />
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed break-keep text-muted">{bio}</p>
    </section>
  );
}
