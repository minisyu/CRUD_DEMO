// 회원 정보를 저장하는 DB(사실은 Map)
// key: id(number), value : UserEntity

import { CreateUserDto } from "./users/dto/create-user.dto";
import { UserEntity } from "./users/entity/user.entity";

// <> -> key, value 값 지정
const USER_TABLE = new Map<number, UserEntity>();
//USER_TABLE.set(1, new UserEntity(1, "a", "s"));

export class PrismaUser {
  findById(id: number): UserEntity | undefined {
    return USER_TABLE.get(id);
  }
  findAll() {
    const userEntities: UserEntity[] = [];
    for (const [id, userEntity] of USER_TABLE.entries()) {
      userEntities.push(
        new UserEntity(id, userEntity.username, userEntity.password)
      );
    }
    return userEntities;
  }
  create({ username, password }: CreateUserDto) {
    // 1. id를 만든다 (id는 DB에서 대체로 자동 생성)
    const id = USER_TABLE.size + 1; // 원래 0부터 시작
    const userEntity = new UserEntity(id, username, password);
    USER_TABLE.set(id, userEntity);

    return id;
  }
  update() {}
  remove(id: number) {
    USER_TABLE.delete(id);
  }

  findByUsername(username: string) {
    for (const [, userEntity] of USER_TABLE.entries()) {
      if (userEntity.username === username) {
        return userEntity;
      }
    }
    return undefined;
  }
}
