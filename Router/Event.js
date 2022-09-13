const express = require("express"); // express 임포트
const eventList = require("../API/Event/EventBannerLIst");
const router = express.Router();

router.use(function (req, res, next) {
  next();
});

router.get("/", async function (req, res) {
  res.send("이벤트 페이지입니다.");
});

router.get("/banner", async function (req, res) {
  res.send(eventList);
});

module.exports = { EventRouter: router };
