import { v4 } from "uuid";

export const SESSION_MAP = new Map<string, number>();

// random 문자열 발급 -> 그것이 sessionId가 됨 -> 그것이 key가 됨..
// user Id는 value가 됨
// sessionId를 주면 userId를 가져올 수 있음 (저장된 경우만, 없으면 undefined)
export function joinSession(userId: number) {
  // 사용자가 로그인할 때, SESSION_MAP에 사용자 ID 추가
  const sessionId = v4(); // 랜덤 uuid 생성

  SESSION_MAP.set(sessionId, userId);

  return sessionId;
}
// 세션 id를 주면 MAP에서 userId를 찾아줌(있는 경우만, 없으면 undefined)
export function findUserId(sessionId: string) {
  const userId = SESSION_MAP.get(sessionId);
  return userId;
}
