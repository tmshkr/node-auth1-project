const express = require("express");
const session = require("express-session");
const server = express();

const router = require("./api");

const sessionConfig = {
  name: "project-session",
  secret: process.env.SESSION_SECRET || "secret",
  resave: false,
  saveUninitialized: process.env.SEND_COOKIES || true,
  cookie: {
    maxAge: 600000, // 10 minutes
    secure: process.env.USE_SECURE_COOKIES || false, // used over https only
    httpOnly: true, // javascript on client can't access cookie
  },
};

server.use(express.json());
server.use(session(sessionConfig));
server.use("/api/users", validateSession);
server.use("/api", router);
server.use(errorHandler);

module.exports = server;

function validateSession(req, res, next) {
  if (!req.session.loggedIn) {
    return next({ code: 404, message: "You shall not pass!!!" });
  }
  next();
}

function errorHandler(err, req, res, next) {
  res.status(err.code).send(err.message);
}
