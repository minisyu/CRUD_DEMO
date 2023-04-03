import { PrismaUser } from "../user.table";
import { CreateUserDto } from "./dto/create-user.dto";

const prismaUser = new PrismaUser();

export class UserRepository {
  // 1. 사용자 생성
  create({ username, password }: CreateUserDto) {
    return prismaUser.create({ username, password });
  }
  // 2. 사용자 조회
  findById(id: number) {
    return prismaUser.findById(id);
  }
  // 2. 사용자 조회
  findByUsername(username: string) {
    return prismaUser.findByUsername(username);
  }
  // 3. 사용자 전체 조회
  findAll() {
    return prismaUser.findAll();
  }
  // 4. 사용자 삭제
  remove(id: number) {
    prismaUser.remove(id);
  }
}
