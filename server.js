const express = require("express");

const router = require("./api");

const server = express();

server.use(express.json());
server.use("/api", router);

module.exports = server;
