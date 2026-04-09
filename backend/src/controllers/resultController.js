import expressAsyncHandler from "express-async-handler";
import Result from "../models/resultModel.js";
import Student from "../models/studentModel.js";
import Teacher from "../models/teacherModel.js";

export const resultAdding = expressAsyncHandler(async (req, res, next) => {
  const {
    studentId,
    className,
    teacherId,
    subject,
    term,
    mark,
    assessmentType,
    remarks,
    isPublished,
  } = req.body;

  const isAvalableResult = await Result.findById(studentId);

  const isAvalableStudent = await Student.findById(studentId);

  const teacher = await Teacher.findById(teacherId);

  if (!isAvalableStudent)
    return res.status(STATUS_CODES.NOT_FOUND).json({
      success: false,
      message: `No student found for the given ID: ${studentId}`,
    });

  if (isAvalableResult)
    return res
      .status(STATUS_CODES.FORBIDDEN)
      .json({ success: false, message: "Result already added" });

  const newRestlt = await Result.create({
    student: isAvalableStudent._id,
    className,
    enterdBy: teacher._id,
    subject,
    term,
    mark,
    assessmentType,
    remarks,
    isPublished,
  });

  if (!newRestlt)
    return res
      .status(STATUS_CODES.SERVER_ERROR)
      .json({ success: false, message: "Internal server error" });

  res
    .status(STATUS_CODES.SUCCESS)
    .json({ success: true, message: "Result added" });
});
