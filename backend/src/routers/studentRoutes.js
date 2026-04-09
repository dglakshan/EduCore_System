import expres from "express";

export const studentRouter = expres.Router();

studentRouter.get("/student/viewprofile");
studentRouter.get("/student/viewtasks");
studentRouter.get("/student/subjects");
studentRouter.get("/student/performancetrend");
studentRouter.get("/student/daypercentage");
studentRouter.get("/student/viewresults");
studentRouter.get("/student/viewnotice");

studentRouter.get("/student/dashboard");
