const fs = require("fs");
const dir = "./public/eventBanner";

const express = require("express"); // express 임포트
const router = express.Router();

router.use(function (req, res, next) {
  next();
});

router.get("/", async function (req, res) {
  res.send("이벤트 페이지입니다.");
});

router.get("/banner", async function (req, res) {
  let bannerlist = [];
  await fs.readdirSync(dir).forEach((file) => {
    bannerlist.push(
      "https://dnf-react-typescript.herokuapp.com/eventBanner/" + file
    );
  });

  res.send(bannerlist);
});

module.exports = { EventRouter: router };
