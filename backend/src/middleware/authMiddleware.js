import Jwt from "jsonwebtoken";
import { STATUS_CODES } from "../utils/constants.js";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(STATUS_CODES.UNAUTHORIZED)
      .json({ success: false, message: "Access denied. No token provided." });
  }

  try {
    const decoded = Jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    next(err);
  }
};
