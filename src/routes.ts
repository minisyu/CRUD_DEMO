import { Router } from "express";
import { UserController } from "./users/user.controller";

export const userRouter = Router();
const userController = new UserController();

userRouter.get("/me", userController.getMe);
// 1. 회원가입
userRouter.post("/signup", userController.signup);
// 2. 로그인
userRouter.post("/login", userController.login);
// 3. 사용자 정보 조회
userRouter.get("/users/:id", userController.getUser);
// 4. 모든 사용자 조회
userRouter.get("/users", userController.getAllUsers);
// 5. 회원탈퇴
userRouter.delete("/withdraw/:id", userController.withdraw);

