import express from "express";
import { dbConnection } from "./src/config/db.js";
import cookieParser from "cookie-parser";
import { superAdminRouter } from "./src/routers/supperAdminRouter.js";
import dotenv from "dotenv";
import { adminRouter } from "./src/routers/adminRouter.js";
dotenv.config();

const app = express();

app.use(express.json());

dbConnection();
app.use(cookieParser());

app.use("/api/admin", adminRouter);
app.use("/api/superadmin", superAdminRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
