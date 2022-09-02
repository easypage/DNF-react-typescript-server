const express = require("express"); // express 임포트
const app = express(); // app생성
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const { CharcterRouter } = require("./Router/Character");
const { ItemRouter } = require("./Router/Item");
const { nickNameSearch, defaultSearch } = require("./API/CharacterAPI");

app.listen(PORT);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/character", CharcterRouter);
app.use("/item", ItemRouter);

app.get("/", function (req, res) {
  defaultSearch("prey","9ea844d6c6a69c6770c3dadb2f413bf1");
  res.send("DNF 프로젝트 서버입니다.");
});
// chid 9ea844d6c6a69c6770c3dadb2f413bf1 prey
