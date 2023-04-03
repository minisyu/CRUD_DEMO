import express from "express";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes";

const app = express();

app.use(cookieParser());
// path, domain 같으면 cookie 모두 다 보내버림~
// app.get("/", (req, res) => {
//   console.log(req.cookies);
//   res.send("home");
// });
app.use(express.json());
app.use(userRouter);
// 쿠키 저장?
// app.get("/cookie", (req, res) => {
//   res.cookie("token1", "abc");
//   res.cookie("token2", "abc");
//   res.cookie("token3", "abc");
//   //   res.setHeader("SET-COOKIE", "token1=chocochipcookieee");
//   //   res.setHeader("SET-COOKIE", "token2=chocochipcookieee");
//   //   res.setHeader("SET-COOKIE", "token3=chocochipcookieee");
//   res.send("cookieeeeee");
// });
app.listen(3000, () => {
  console.log("server is running at 3000");
});
// Cookie: token=ihatemonday; tokennnnnn=gooooooooooood; token1=abc; token2=abc; token3=abc
//
