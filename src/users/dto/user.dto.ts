// 전송 전용 객체
// 백엔드 -> 프론트엔드로 데이터를 보낼 때, {response body}
// 프론트엔드 -> 백엔드로 데이터를 보낼 때, {request body}
// body에 담겨서 전송되는 데이터를 나타내는 용어

export interface UserDto {
  id: number;
  username: string;
}
