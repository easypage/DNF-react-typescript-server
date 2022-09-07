const express = require("express"); // express 임포트
const { AuctionItemSearch } = require("../API/Auction/AuctionAPI");
const router = express.Router();

router.use(function (req, res, next) {
  next();
});

router.get("/itemSearch", async function (req, res) {
  const { itemName } = req.query;
  const api = await AuctionItemSearch(itemName);
  if (!api.rows) {
    return res.status(400).json({ status: "400", message: api });
  } else {
    res.status(200).json(api);
  }
});

router.get("/", function (req, res) {
  res.send("경매장 검색 페이지입니다.");
});

module.exports = { AuctionRouter: router };
