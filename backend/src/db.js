import mongoose, { model } from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    console.log(MONGO_URI);
    await mongoose.connect(MONGO_URI);
    console.log("[+] connected to Database");
  } catch (err) {
    console.error(err);
  }
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 120,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 257,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 99,
  },
});

const savedArticleSchema = new mongoose.Schema({
  mediaUrl: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  pubDate: {
    type: Date,
  },
  articleUrl: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const User = model("User", userSchema);
const SavedArticle = model("SavedArticle", savedArticleSchema);
export { connectDB, User, SavedArticle };
