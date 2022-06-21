const express = require("express");
const userRouter = express.Router();
const admin = require("../middlewares/admin")
const User = require("../model/user");

userRouter.post("/api/user-sign-up", async (req, res) => {
    try {
      const { name, password, model, } = req.body;
      let user = new User({
        name,
        password,
        model,
      });
      console.log(user)
      user = await user.save();
      res.json(user);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

  userRouter.get("/api/user-login/", async (req, res) => {
    try {
      let user = await User.findOne({name:req.query.name});
      console.log(user);
      res.json(user)
      
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  
  module.exports = userRouter;