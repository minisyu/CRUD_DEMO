import { Request, Response } from "express";
import { findUserId } from "../session.map";
import { UserService } from "./user.service";

const userService = new UserService();

export class UserController {
  // 1. 회원가입
  signup(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const userId = userService.signup({ username, password });
      res.status(200).json({ userId });
    } catch (error) {
      const e = error as Error;
      res.status(400).json({
        msg: e.message,
      });
    }
  }
  // 2. 로그인
  login(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      // service에서 sessionId: userId가 SESSION_MAP에 이미 저장됨
      // 더이상 해줄 건 없고, cookie로 클라이언트한테 sessionId를 주면 끝
      const sessionId = userService.login({ username, password });
      res.cookie("sessionId", sessionId);
      res.status(200).json({
        msg: "로그인을 성공했습니다.",
      });
    } catch (error) {
      const e = error as Error;
      res.status(400).json({
        msg: e.message,
      });
    }
  }
  //
  getMe(req: Request, res: Response) {
    // 사용자가 로그인 된 상태라면 cookie에 sessioId가 있을 것
    // cookieParser를 사용하기 때문에
    // request header에 자동으로 딸려 오는 모든 cookies들이 들어가 있음
    // SESSION_MAP :{sflksjflkdjf: 1}
    // COOKIE: sessionId = sflksjflkdjf < 이런식
    //
    // cookieParser는 이런 쿠키들을 모조리 모아서 객체 형태로 req.cookies에 담아줌
    // req.cookies = { sessionId: "sflksjflkdjf " }
    // 그거를 가지고 SESSION_MAP으로부터 로그인 할 때 저장한 userId를 받아오면 됨
    const { sessionId } = req.cookies;
    const myId = findUserId(sessionId);
    if (!myId) {
      res.status(401).json({
        error: "로그인이 안 되었는데...??다시 확인 ㄱㄱ",
      });
      // 여기서 return을 하면 myId가 없는 경우 -> 로그인이 안 된 경우 "함수 종료"
      return;
    }
    // 함수가 로그인이 안되었을 때 무조건 종료가 되기 때문에
    // myId는 이제 절대로 undefinded가 될 수 없음
    const me = userService.getUser(myId);
    res.json({
      me,
    });
  }
  // 3. 사용자 조회
  getUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = userService.getUser(+id);
      res.status(200).json({ user });
    } catch (error) {
      const e = error as Error;
      res.status(400).json({
        msg: e.message,
      });
    }
  }
  // 4. 모든 사용자 조회
  getAllUsers(req: Request, res: Response) {
    try {
      const users = userService.getAllUsers();
      res.status(200).json({ users });
    } catch (error) {
      const e = error as Error;
      res.status(400).json({
        msg: e.message,
      });
    }
  }
  // 5. 회원탈퇴
  withdraw(req: Request, res: Response) {
    const { id } = req.params;
    try {
      userService.withdraw(+id);
      res.status(200).json({ msg: "회원탈퇴가 완료되었습니다." });
    } catch (error) {
      const e = error as Error;
      res.status(400).json({
        msg: e.message,
      });
    }
  }
}
