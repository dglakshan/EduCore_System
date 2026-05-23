import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { redirectTo } from "../middleware/roleMiddleware.js";
import { ROLES } from "../utils/constants.js";
import { resultAdding } from "../controllers/resultController.js";
import { addAttendance } from "../controllers/attendanceController.js";
import { teacherDashBoard } from "../controllers/dashboardController.js";
import { deleteUser } from "../controllers/authController.js";
import { teacherAccessMiddleware } from "../middleware/teacherAccessMiddleware.js";

export const teacherRouter = express.Router();

teacherRouter.use(authMiddleware, redirectTo(ROLES.TEACHER));

// teacherRouter.get("/teacher/viewprofile");

teacherRouter.get("/dashboard", teacherAccessMiddleware, teacherDashBoard);

// teacherRouter.post("/teacher/addstudent");
// teacherRouter.get("/teacher/viewstudentprofile");
teacherRouter.delete("/deletestudent", deleteUser);

teacherRouter.post("/addresult", resultAdding);
teacherRouter.post("/addAttendance", addAttendance);
// teacherRouter.put("/teacher/updateresult");
// teacherRouter.get("/teacher/viewresults");

// teacherRouter.post("/teacher/addatendance");
// teacherRouter.put("/teacher/updateattendance");

// teacherRouter.post("/teacher/addnotice");
// teacherRouter.delete("/teacher/deletenotice");

// teacherRouter.get("/teacher/viewclass");
// teacherRouter.get("/teacher/schedule");
