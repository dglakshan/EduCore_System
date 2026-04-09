import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_URL = process.env.MONGO_URL;

export const dbConnection = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to mongoDB");
  } catch (err) {
    console.log("MongoDB connection failed", err);
    process.exit(1);
  }
};
