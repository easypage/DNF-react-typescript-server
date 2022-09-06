const express = require("express"); // express 임포트
const app = express(); // app생성
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const { CharcterRouter } = require("./Router/Character");
const { ItemRouter } = require("./Router/Item");
const { EventRouter } = require("./Router/Event");

app.listen(PORT);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use("/character", CharcterRouter);
app.use("/item", ItemRouter);
app.use("/event", EventRouter);

app.get("/", function (req, res) {});
