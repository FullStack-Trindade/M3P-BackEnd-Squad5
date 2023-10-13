require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes");
const server = express();

server.use(
  cors({
    origin: "*",
  })
);
server.use(express.json());
server.use(router);

module.exports = {
  server,
};
