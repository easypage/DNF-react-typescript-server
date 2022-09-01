const express = require("express"); // express 임포트
const app = express(); // app생성
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.listen(PORT);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", function (req, res) {
  res.send("DNF 프로젝트 서버입니다.");
});