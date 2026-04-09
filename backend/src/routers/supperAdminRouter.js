import express, { Router } from "express";
// import { supperAdminLogin } from "../controllers/supperAdminController.js";
// import { teacherAdding } from "../controllers/teacherController.js";
import {
  studentRegister,
  superAdminRegister,
  teacherRegister,
  userLogin,
} from "../controllers/authController.js";
import { superAdminMiddleware } from "../middleware/superAdminMiddleware.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { redirectTo } from "../middleware/roleMiddleware.js";
import { ROLES } from "../utils/constants.js";
import { classAdding } from "../controllers/classController.js";
import { assingToClass } from "../controllers/teacherController.js";

export const superAdminRouter = express.Router();

superAdminRouter.post("/register", superAdminMiddleware, superAdminRegister);

superAdminRouter.post("/login", userLogin);

superAdminRouter.use(authMiddleware, redirectTo(ROLES.SUPER_ADMIN));

// superAdminRouter.get("/admin/viewprofile");

// superAdminRouter.get("/admin/dashboard");

superAdminRouter.post("/addclass", classAdding);

superAdminRouter.post("/addstudent", studentRegister);
// superAdminRouter.get("/admin/viewstudents");
// superAdminRouter.put("/admin/updatestudent");
// superAdminRouter.delete("/admin/deletestudent");

superAdminRouter.post("/addteacher", teacherRegister);
superAdminRouter.post("/assingclass", assingToClass);
// superAdminRouter.get("/admin/viewteachers");
// superAdminRouter.put("/admin/updateteacher");
// superAdminRouter.delete("/admin/deleteteacher");

// superAdminRouter.get("/admin/viewattendance");

// superAdminRouter.get("/admin/viewresults");

// superAdminRouter.put("/admin/blockuser");

// superAdminRouter.post("/admin/publishresult");

// superAdminRouter.post("/admin/addnotice");
// superAdminRouter.delete("/admin/deletenotice");
