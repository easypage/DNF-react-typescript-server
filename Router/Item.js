const express = require("express"); // express 임포트
const { itemImage } = require("../API/Item/ItemAPI");
const router = express.Router();

router.use(function (req, res, next) {
  next();
});
router.get("/", function (req, res) {
  res.send("아이템 페이지입니다.");
});
router.get("/itemimage", function (req, res) {
  const { itemId } = req.query;
  // 파라미터 확인
  if (!itemId) {
    return res.status(404).json({ error: ["400", "Bad Request"] });
  }

  res.redirect(itemImage(itemId));
});

module.exports = { ItemRouter: router };
