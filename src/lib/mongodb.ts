// MongoDB 클라이언트를 한 번만 만들어 재사용하고 클릭 수 컬렉션을 꺼내 주는 모듈
import { MongoClient } from "mongodb";

// 링크 하나의 클릭 수 문서. _id 는 links.ts 의 링크 id 다
type ClickDoc = { _id: string; count: number };

// 개발 서버는 파일이 바뀔 때마다 모듈을 다시 불러오므로 globalThis 에 보관해 연결이 쌓이지 않게 한다
const globalForMongo = globalThis as typeof globalThis & { mongoClient?: MongoClient };

export function getClicksCollection() {
  if (!globalForMongo.mongoClient) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI 환경변수가 설정되지 않았습니다.");
    }
    globalForMongo.mongoClient = new MongoClient(uri);
  }
  return globalForMongo.mongoClient.db("linknamu").collection<ClickDoc>("clicks");
}
