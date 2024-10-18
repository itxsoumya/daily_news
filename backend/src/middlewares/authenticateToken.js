import jwt from "jsonwebtoken";
import { User } from "../db.js";

export const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];
    console.log("token", token);
    if (!token)
      return res.status(401).json({
        msg: "Invalid Token",
      });

    const user = jwt.verify(token, process.env.JWT_SECRET);

    const user_from_db = await User.findOne({ email: user.email });
    if (!user_from_db)
      return res.status(403).json({
        msg: "invalid token",
      });
    req.user = user_from_db;
    next();
  } catch (err) {
    // console.log(err)
    return res.status(403).json({
      msg: "invalid token",
    });
  }
};
