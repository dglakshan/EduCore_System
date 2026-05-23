import express from "express";
import { userInfo, userLogin } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { rateLimitMidleware } from "../middleware/rateLimitMiddleware.js";

export const authRouter = express.Router();

authRouter.post("/login", rateLimitMidleware, userLogin);
authRouter.get("/user", authMiddleware, userInfo);
