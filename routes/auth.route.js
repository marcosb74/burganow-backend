const express = require("express");
const router = express.Router();
const User = require("../models/User");
const mongoose = require("mongoose");

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.send("not_found");
  }
  if (user.password === req.body.password && user.email === req.body.email) {
    res.send(user);
  } else {
    res.send("email o password erroeno");
  }
});

router.post("/signup", async (req, res) => {
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist) {
    return res.send("user already on DB");
  }
  await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  return res.send("user created");
});

router.get("/userlist", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});
router.put("/userlist/:id", async (req, res) => {
  console.log(req.body);
  const user = await User.findById({ _id: req.body.id });
  if (!user) {
    return "User not found";
  }
  Object.assign(user, req.body);
  await user.save();
  res.send(user);
});
module.exports = router;
