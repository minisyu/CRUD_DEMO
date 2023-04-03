import express from "express";

const app = express();

app.get("/ping", (req, res) => {
  res.send("server is working!!");
});

app.listen(4000, () => {
  console.log(`server is running at 4000`);
});
