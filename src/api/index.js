const express = require("express");
const cors = require("cors");
const config = require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");

require("../config/connect-mongoose");
require("../models");

const app = express();

app.use(express.static(path.join(__dirname, "../../public")));

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: err.name + ": " + err.message });
  }
});

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/assets/mascots", express.static(path.resolve(__dirname, "../image")));
console.log(path.resolve(__dirname, "../image"));

const route = require("../routes");
app.use(route);
app.get("/", (req, res) => {
  res.status(200).json("Success");
});
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../../public", "index.html"));
// });

app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({
    error: { code: err.code, msg: err.message },
  });
});

module.exports = app;
