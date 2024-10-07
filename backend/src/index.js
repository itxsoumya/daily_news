import express from "express";
import dotenv from "dotenv";
import userRoutes from "../src/routers/userRoutes.js";
import { connectDB } from "./db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(PORT, async () => {
  console.log(`[+] Server has started....`);
  await connectDB()
});
