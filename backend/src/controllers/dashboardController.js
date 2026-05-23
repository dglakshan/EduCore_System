import expressAsyncHandler from "express-async-handler";
import { totalStudents } from "./studentController.js";
import { allTeachers } from "./teacherController.js";
import Teacher from "../models/teacherModel.js";
import {
  getLastFiveDayAttendanceAvarage,
  todayClassAttendance,
  todayClassPresentCount,
} from "./attendanceController.js";
import { STATUS_CODES } from "../utils/constants.js";
import { avarageScoreOfClasses } from "./resultController.js";

export const teacherDashBoard = expressAsyncHandler(async (req, res) => {
  const { email } = req.user;

  const teacher = await Teacher.findOne({ email }).populate({
    path: "classes",
  });

  if (!teacher) {
    res.status(STATUS_CODES.NOT_FOUND);
    throw new Error("Teacher not found");
  }

  const classesObjectIdsArray = await teacher.classes.map((item) => {
    return { _id: item._id };
  });

  const [todayPresntCount, totalAvarageScoreOfAllClasses] = await Promise.all([
    todayClassPresentCount({ classesObjectIdsArray }),
    avarageScoreOfClasses({ classesObjectIdsArray, term: "Term 1" }), //  Remmember to change term to automatic
  ]);

  const dashBoardData = {
    totalStudentsOfAllClasses: teacher.totalStudent,
    todayPresntCount,
    totalAvarageScoreOfAllClasses,
    allClasses: classesObjectIdsArray.length,
  };

  res.status(STATUS_CODES.SUCCESS).json({ success: true, dashBoardData });
});
