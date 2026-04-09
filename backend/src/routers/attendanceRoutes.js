import experss from "express";

export const attendanceRouter = experss.Router();

attendanceRouter.get("/attendance/dayspresent");
attendanceRouter.get("/attendance/daysabsent");
attendanceRouter.get("/attendance/dayslate");
attendanceRouter.get("/attendance/dayspresentpercentage");
attendanceRouter.get();
