const express = require("express"); // express 임포트
const { defaultSearch, nickNameSearch, characterImage } = require("../API/CharacterAPI.js");
const router = express.Router();

router.use(function (req, res, next) {
  next();
});

router.get("/", function (req, res) {


res.send("캐릭터 페이지입니다.")
});


// 닉네임 검색
router.get("/nickName", async function (req, res) {
  
  const nickname = req.query.nickname;

  if (!nickname) {
    res.status(400).Json({ error: ["400", "Bad Request"] });
  }

  const api = await nickNameSearch(nickname);
  if (api.error) { 
    res.status(500).json(api);
  }
  res.status(200).json(api);
  });
  
// 경로로 받기 체크

router.get("/default", async function (req, res) {
  const { serverId, characterId } = req.query;
// 파라미터 확인
  if (!serverId|!characterId) {
    return res.status(404).json({error: ["400", "Bad Request"]})
  }

  const api = await defaultSearch(serverId, characterId);
 // api호출 오류 확인
  if (api.error) { 
   return res.status(501).json(api);
  }
  
  return res.status(200).json(api);
});


router.get("/characterimage", function (req, res) {
  const { serverId, characterId } = req.query;
  // 파라미터 확인
    if (!serverId|!characterId) {
      return res.status(404).json({error: ["400", "Bad Request"]})
    }

  res.redirect(characterImage(serverId,characterId))

 });

module.exports = { CharcterRouter: router };
