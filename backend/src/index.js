import express from "express";
import dotenv from "dotenv";
import userRoutes from "../src/routers/userRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server has started....`);
});
