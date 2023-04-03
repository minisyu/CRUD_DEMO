// Entity - DB에 들어가는 테이블의 칼럼들과 일치하는 형태
export interface UserEntity {
  id: number;
  username: string;
  password: string;
}

const e: UserEntity = {
  id: 1,
  username: "kiwi",
  password: "k",
};
