import { joinSession } from "../session.map";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginDto } from "./dto/login.dto";
import { UserDto } from "./dto/user.dto";
import { UserEntity } from "./entity/user.entity";
import { UserRepository } from "./user.repository";

const userRepository = new UserRepository();

export class UserService {
  // service단은 비즈니스 로직(회사 or 서비스의 핵심 로직)이 담기는 부분
  // 개발자가 아닌 사람들도 쉽게 이름을 읽고 기능을 파악할 수 있도록
  // 보다 서비스 친화적인 메소드 이름을 가지고 있다.

  // 반대로 Repository는 좀 더 DB 친화적인 메소드 이름을 가지고 있다.

  // 1. 회원가입
  signup({ username, password }: CreateUserDto) {
    const user = userRepository.findByUsername(username);
    // 1-1. 사용자가 DB에 존재하는지 확인, 존재하면 오류 메시지 던져.."이미 존재.."
    if (user) {
      throw new Error("이미 존재한 회원입니다.");
    }
    // 1-2. 오류 없으면 회원 DB에 만들기
    return userRepository.create({ username, password });
  }
  // 2. 로그인
  login({ username, password }: LoginDto) {
    const user = userRepository.findByUsername(username);
    // 2-1. 사용자가 DB에 없으면 존재하지 않는 오류 발생
    if (!user) {
      throw new Error("존재하지 않은 회원입니다.");
    }
    // 2-2. 존재하면 비번 확인 -> 비번 불일치면 오류 발생
    if (user.password !== password) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }
    // 2-3. 위의 두 케이스 모두 아닐 경우 -> 성공적인 로그인(아직 토큰 없다 -> 리턴x)
    // TODO: 나중에 토큰 만들 때 더 뭐한당...*^^*
    // SESSION
    // joinSession은 SESSION_MAP에 sessionId(key): userId(value) 등록
    // 그래서 나중에 sessionid로 userId를 가져올 수 있게 저장
    // sessionId를 cookie로 보내면 나중에 요청을 보낼 때 req.cookies.sessionId로 가져올 수 있음
    const sessionId = joinSession(user.id);
    return sessionId;
  }
  // 3. 사용자 정보 조회
  getUser(id: number) {
    const userEntity = userRepository.findById(id);
    // 사용자가 없으면 undefined, 있으면 UserEntity -> UseDto로 가공(비번 빼셈)
    if (!userEntity) {
      return undefined;
    }
    const userDto: UserDto = {
      id: userEntity.id,
      username: userEntity.username,
    };
    return userDto;
  }
  // 4. 모든 사용자 정보 조회
  getAllUsers() {
    // UserEntity[] -> UserDto[]로 가공
    const userEntities = userRepository.findAll();
    const userDtos = userEntities.map((userEntity) => {
      const userDto: UserDto = {
        id: userEntity.id,
        username: userEntity.username,
      };
      return userDto;
    });
    return userDtos;
  }
  // 5. 회원탈퇴
  withdraw(id: number) {
    const userId = userRepository.findById(id);
    if (!userId) {
      throw new Error("존재하지 않은 회원입니다.");
    }
    userRepository.remove(id);
  }
}
