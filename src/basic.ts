import express from "express";

const app = express();

app.use("/test", express.static("public"));
// ("GET /")
// app.use((req, res, next) => {
//   console.log("middleware1");
//   //res.send("okkkk");
//   res.setHeader("hello", "byebye");
//   res.end("ok");
//   //res.setHeader("X-Powered_By", "Express");
//   //res.end("ok");
//   next();
// });
// app.use((req, res) => {
//   console.log("middleware2");
//   res.send("ok");
// });
app.get("/", (req, res) => {
  const user = {
    id: 1,
    username: "abc",
  };
  //res.send(user);
  //res.end(user);
  // res.send(), res.json() -> 내부적으로 header의 content-type을 설정
  // 객체를 넣으면 JSON 문자열로 변환해줌!
  // 그렇기에 전송이 가능한 것
  // 네트워크르르 통한 전송은 반드시 문자열 형태여야 함

  //res.setHeader("Content-Type", "application/json");
  const userString = JSON.stringify(user); // 객체 -> 문자열
  res.end(userString); // 문자열은 그대로 보낼 수 있다~
});
app.listen(3000, () => {
  console.log(`server is running at 3000`);
});
