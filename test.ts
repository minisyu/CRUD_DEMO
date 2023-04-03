// import express from "express";

// const app = express();

// // end, send, sendFile, json
// app.get("/end", (req, res) => {
//     res.end();
// });

// app.get("/send", (req, res) => {
//     //res.send("send");
//     // res.setHeader("Content-Type", "text/html");
//     // res.end("send");
//     // error
//     // res.send("1");
//     // res.send("1");
//     res.setHeader("Content-Type", "text/html");
//     res.end("1");
//     //res.setHeader("Content-Type", "text/html");
//     //res.end("1");
// });

// app.get("/sendFile", (req, res) => {
//     // res.sendFile();
// });

// app.get("/json", (req, res) => {
//     res.setHeader("Content-Type", "application/json; charset=utf-8");
//     // JSON.parse(): JSON  객체 -> js 객체로
//     // JSON.stringify(): js 객체 -> JSON 객체
//     const data = JSON.stringify({
//         username: "apple",
//         id: 1,
//     });
//     res.send(data);
//     // res.json({
//     //     username: "banana",
//     //     id: 1,
//     // });
// });

// //  query parameter /?a=1&b=2&c=3
// app.get("/query", (req, res) => {
//     console.log(req.query);
//     res.end();
// });

// // path parameter
// app.get("/users/:id", (req, res) => {
//     const id = req.params.id;
//     res.send(id);
// });
// `
// POST /form HTTP/1.1
// Content-Type: application/x-www-form-urlencoded

// a=1&b=2&c=3
// `

// app.use(express.urlencoded());
// app.post("/form", (req, res) => {
//     console.log(req.body);
//     res.send("ok");
// });

// `
// POST /json HTTP/1.1
// Content-Type: application/json

// {
//     "username" : "abc",
//     "password:: "123"
// }
// `
// // req.headers['Content-Type'] === "application/json" 일때만 파싱
// app.use(express.json());
// app.post("/json", (req, res) => {
//     console.log(req.body);
//     res.send("ok");
// });

// app.listen(3001, () => {
//     console.log('server is running at 3001');
// });
