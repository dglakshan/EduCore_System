import express from "express";

export const teacherRouter = express.Router();

teacherRouter.get("/teacher/viewprofile");

teacherRouter.get("/teacher/dashboard");

teacherRouter.post("/teacher/addstudent");
teacherRouter.get("/teacher/viewstudentprofile");
teacherRouter.delete("/teacher/deletestudent");

teacherRouter.post("/teacher/addrestlt");
teacherRouter.put("/teacher/updateresult");
teacherRouter.get("/teacher/viewresults");

teacherRouter.post("/teacher/addatendance");
teacherRouter.put("/teacher/updateattendance");

teacherRouter.post("/teacher/addnotice");
teacherRouter.delete("/teacher/deletenotice");

teacherRouter.get("/teacher/viewclass");
teacherRouter.get("/teacher/schedule");
