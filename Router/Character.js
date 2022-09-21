const express = require("express"); // express 임포트
const {
  defaultSearch,
  nickNameSearch,
  characterImage,
  characterStatus,
} = require("../API/Character/CharacterAPI");
const router = express.Router();

router.use(function (req, res, next) {
  next();
});

router.get("/", function (req, res) {
  res.send("캐릭터 페이지입니다.");
});

// 닉네임 검색
router.get("/nickName", async function (req, res) {
  const { serverId, nickname } = req.query;

  if (!nickname) {
    return res.status(400).json({ error: ["400", "Bad Request"] });
  }
  const api = await nickNameSearch(serverId, nickname);

  if (api.error) {
    return res.status(500).json(api);
  }

  return res.status(200).json(api);
});

router.get("/default", async function (req, res) {
  const { serverId, characterId } = req.query;
  // 파라미터 확인
  if (!serverId | !characterId) {
    return res.status(404).json({ error: ["400", "Bad Request"] });
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
  if (!serverId | !characterId) {
    return res.status(404).json({ error: ["400", "Bad Request"] });
  }

  res.redirect(characterImage(serverId, characterId));
});

router.get("/status", async function (req, res) {
  const { serverId, characterId } = req.query;
  // 파라미터 확인
  if (!serverId | !characterId) {
    return res.status(404).json({ error: ["400", "Bad Request"] });
  }
  const data = await characterStatus(serverId, characterId);
  res.send(data);
});

module.exports = { CharcterRouter: router };
