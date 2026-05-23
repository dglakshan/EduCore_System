import expressAsyncHandler from "express-async-handler";
import Attendance from "../models/attendanceModel.js";
import Student from "../models/studentModel.js";
import { STATUS_CODES } from "../utils/constants.js";
import Class from "../models/classModel.js";

export const addAttendance = expressAsyncHandler(async (req, res) => {
  const { student, status, remark, term } = req.body;
  let { academicYear, attendanceDate } = req.body;
  const { _id } = req.user;

  const isStudentAvailable = await Student.findOne({ studentId: student });
  if (!isStudentAvailable) {
    res.status(STATUS_CODES.NOT_FOUND);
    throw new Error("Student not found");
  }

  const isClassAvailable = await Class.findById(isStudentAvailable.class);

  if (!isClassAvailable) {
    res.status(STATUS_CODES.NOT_FOUND);
    throw new Error("Class associated with student not found");
  }

  if (!attendanceDate || attendanceDate === null) {
    attendanceDate = new Date().toISOString().split("T")[0];
  }

  if (!academicYear || academicYear === null) {
    academicYear = new Date().getFullYear().toString();
  }

  const objectId = isStudentAvailable._id;

  const excitingAttendance = await Attendance.findOne({
    student: objectId,
    attendanceDate,
  });

  try {
    if (excitingAttendance) {
      await Attendance.updateOne(
        {
          _id: excitingAttendance._id,
        },
        {
          $set: {
            status,
            attendanceDate,
            markedBy: _id,
            remark,
            term,
            academicYear,
          },
        },
      );

      return res
        .status(STATUS_CODES.SUCCESS)
        .json({ success: true, message: "Attedance updated" });
    }

    const createAttendance = await Attendance.create({
      student: isStudentAvailable._id,
      class: isClassAvailable._id,
      status,
      attendanceDate,
      markedBy: _id,
      remark,
      term,
      academicYear,
    });

    res
      .status(STATUS_CODES.SUCCESS)
      .json({ success: true, message: "New attendance marked" });
  } catch (err) {
    res.status(STATUS_CODES.SERVER_ERROR);
    throw err;
  }
});

export const todayClassAttendance = expressAsyncHandler(
  async (classObjectId) => {
    const date = new Date().toISOString().split("T")[0];

    const attendance = await Attendance.getDayAllAttendanceOfClass({
      date,
      classObjectId,
    });

    return attendance;
  },
);

export const todayClassPresentCount = expressAsyncHandler(
  async ({ classesObjectIdsArray }) => {
    const date = new Date().toISOString().split("T")[0];

    const presentCount = await Promise.all(
      classesObjectIdsArray.map(async (item) => {
        const count = await Attendance.getDayClassPresentCount({
          date,
          classObjectId: item._id,
        });
        return count;
      }),
    ).then((result) =>
      result.reduce((total, currentValue) => total + currentValue, 0),
    );

    return presentCount;
  },
);

export const getTodayAttendanceAvarage = expressAsyncHandler(
  async ({ classObjectId }) => {
    const date = new Date().toISOString().split("T")[0];

    const attendanceAvarage = await getDayAttendanceAvarageOfClass({
      date,
      classObjectId,
    });

    return attendanceAvarage;
  },
);

export const getLastFiveDayAttendanceAvarage = expressAsyncHandler(
  async ({ classObjectId }) => {
    let dateArray = [];
    for (let index = 4; index >= 0; index--) {
      let date = new Date(new Date().getTime() - 86400000 * (index + 1))
        .toISOString()
        .split("T")[0];

      dateArray.push(date);
    }

    const result = await Promise.all(
      dateArray.map(async (item) => {
        const attendanceAvarage =
          await Attendance.getDayAttendanceAvarageOfClass({
            date: item,
            classObjectId,
          });
        return attendanceAvarage;
      }),
    );

    return result;
  },
);
