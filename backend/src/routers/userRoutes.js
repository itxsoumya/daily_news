import express from "express";
import { User } from "../db.js";
import bcrypt from "bcryptjs";
import {
  validateSignin,
  validateSignup,
} from "../middlewares/validationMiddleware.js";
import jwt from "jsonwebtoken";
import { authenticateToken } from "../middlewares/authenticateToken.js";
const router = express.Router();

router.get("/ping", (req, res) => {
  return res.send("hellooo");
});

router.post("/signup", validateSignup, async (req, res) => {
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

router.post("/signin", validateSignin, async (req, res) => {
  try {
    console.log("[+] inside signin");
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("Invalid email or password");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: "Invalid email or password" });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      msg: "signin succesfull",
      token: "Bearer " + token,
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
});

router.post("/authtoken", authenticateToken, async (req, res) => {
  return res.json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  });
});

export default router;
