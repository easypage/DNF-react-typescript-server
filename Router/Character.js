const express = require("express"); // express 임포트
const { defaultSearch, nickNameSearch } = require("../API/CharacterAPI.js");
const router = express.Router();

const characterAPI = require("../API/CharacterAPI.js");

router.use(function (req, res, next) {
  next();
});

router.get("/", function (req, res) {
res.send("캐릭터 페이지입니다.")
});

// req 설정

router.get("/nickName", async function (req, res) {
  
  const api = await nickNameSearch("메론맛어썰트");
  if (api.error) { 
    res.status(500).json(api);
  }
  res.status(200).json(api);
  });
  

router.get("/default", async function (req, res) {
  const api = await defaultSearch("prey", "9ea844d6c6a69c6770c3dadb2f413bf1");
  if (api.error) { 
    res.status(501).json(api);
  }
  res.status(200).json(api);
});

module.exports = { CharcterRouter: router };
