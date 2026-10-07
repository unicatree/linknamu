// 원형 프로필 사진, 이름, 한줄소개를 보여주는 프로필 컴포넌트
import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-2 text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={128}
        height={128}
        loading="eager"
        className="mb-2 h-32 w-32 rounded-full border border-black/10 object-cover dark:border-white/15"
      />
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </section>
  );
}
