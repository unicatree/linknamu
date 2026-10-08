// 링크별 클릭 수를 한 번에 조회(GET)하고 1씩 올리는(POST) API
import { connection } from "next/server";
import { links } from "@/data/links";
import { getClicksCollection } from "@/lib/mongodb";

const linkIds = links.map((link) => link.id);

// 응답 예: { "github": 42, "blog": 3 } — 한 번도 눌리지 않은 링크는 빠진다
export async function GET() {
  // 빌드 때 미리 만들어 두지 않고 요청이 올 때마다 DB 에서 읽는다
  await connection();
  const docs = await getClicksCollection()
    .find({ _id: { $in: linkIds } })
    .toArray();
  return Response.json(Object.fromEntries(docs.map((doc) => [doc._id, doc.count])));
}

// 요청 본문 예: { "id": "github" }
export async function POST(request: Request) {
  const { id } = await request.json().catch(() => ({}));
  // 목록에 없는 id 로 DB 에 문서가 마구 생기지 않도록 막는다
  if (!linkIds.includes(id)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }
  await getClicksCollection().updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
  return new Response(null, { status: 204 });
}
