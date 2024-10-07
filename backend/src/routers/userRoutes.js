import express from "express";
import { User } from "../db.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.get("/ping", (req, res) => {
  return res.send("hellooo");
});

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({
      msg: "User Registered Successfully",
    });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
    });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("Invalid email or password");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid email or password");

    res.json({
      msg: "signin succesfull",
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
});

export default router;
