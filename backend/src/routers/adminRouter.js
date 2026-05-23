import express, { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  adminRegister,
  deleteUser,
  studentRegister,
  userLogin,
} from "../controllers/authController.js";
import { redirectTo } from "../middleware/roleMiddleware.js";
import { ROLES } from "../utils/constants.js";
import {
  updateStudent,
  updateStudentEmil,
} from "../controllers/studentController.js";
import { deleteClass } from "../controllers/classController.js";
// import { adminDashborad } from "../controllers/dashboardController.js";

export const adminRouter = express.Router();

adminRouter.post("/register", adminRegister);

adminRouter.post("/login", userLogin);

adminRouter.use(authMiddleware, redirectTo(ROLES.ADMIN));

adminRouter.delete("/deleteclass/:className", deleteClass);

//  adminRouter.get("/admin/viewprofile");

// adminRouter.get("/admin/dashboard", adminDashborad);

// adminRouter.get("/admin/viewattendance");

// adminRouter.get("/admin/viewresults");

// adminRouter.put("/admin/blockuser");

// adminRouter.post("/admin/publishresult");

adminRouter.post("/admin/addstudent", studentRegister);
// adminRouter.get("/admin/viewstudents");
adminRouter.put("/admin/updatestudent", updateStudent);
adminRouter.put("/admin/updateStudentEmil", updateStudentEmil);
adminRouter.delete("/deletestudent/:email", deleteUser);

// adminRouter.post("/admin/addteacher");
// adminRouter.get("/admin/viewteachers");
// adminRouter.put("/admin/updateteacher");
adminRouter.delete("/deleteteacher/:email", deleteUser);

// adminRouter.post("/admin/addnotice");
// adminRouter.delete("/admin/deletenotice");
