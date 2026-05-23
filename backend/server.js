import express from "express";
import { dbConnection } from "./src/config/db.js";
import cookieParser from "cookie-parser";
import { superAdminRouter } from "./src/routers/supperAdminRouter.js";
import dotenv from "dotenv";
import { adminRouter } from "./src/routers/adminRouter.js";
import { crosOptions } from "./src/config/corsOptions.js";
import cors from "cors";
import { authRouter } from "./src/routers/authRoutes.js";
import { teacherRouter } from "./src/routers/teacherRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors(crosOptions));
app.use(cookieParser());

dbConnection();

app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/superadmin", superAdminRouter);
app.use("/api/teacher", teacherRouter);

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log("Server is running on port 3000");
});
