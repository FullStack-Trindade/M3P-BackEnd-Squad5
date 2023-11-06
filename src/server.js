require("dotenv").config();
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");

const router = require("./routes");
const swaggerDocument = require("./swagger.json");

const server = express();

server.use(
  cors({
    origin: "*",
  })
);

server.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.use(express.json());
server.use(router);

module.exports = {
  server,
};
