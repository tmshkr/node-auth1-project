const router = require("express").Router();
const Users = require("./users-model.js");

router.get("/users", (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.send(err));
});

router.get("/", (req, res) => {
  res.json({ api: "running..." });
});

module.exports = router;
