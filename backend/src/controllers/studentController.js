import expressAsyncHandler from "express-async-handler";
import Student from "../models/studentModel.js";
import User from "../models/userModel.js";
import { STATUS_CODES } from "../utils/constants.js";
import Teacher from "../models/teacherModel.js";

export const updateStudent = expressAsyncHandler(async (req, res) => {
  const { studentId, name, className, subjects, grade, status } = req.body;

  await Student.findByIdAndUpdate(
    studentId,
    {
      name,
      subjects,
      department,
      grade,
      status,
    },
    { new: true, runValidators: true },
  );

  const student = await Student.findById(studentId);

  await Class.findByIdAndUpdate(student.class, {
    $pull: { students: student._id },
  });

  const newClass = await Class.findOne({ className });

  newClass.students.push(student._id);
  await newClass.save();

  res
    .status(STATUS_CODES.SUCCESS)
    .json({ success: true, message: "Student updated" });
});

export const updateStudentEmil = expressAsyncHandler(async (req, res, next) => {
  const { email, studentId } = req.body;

  const student = await Student.findById(studentId);

  const oldEmail = student.email;

  if (!student)
    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ success: false, message: "Student not found" });

  const isEmailTaken = await User.findOne({ email });

  if (isEmailTaken)
    return res
      .status(STATUS_CODES.FORBIDDEN)
      .json({ success: false, message: "Email already registered" });

  const Updateduser = await User.findByIdAndUpdate(
    student.user,
    {
      email,
    },
    { new: true, runValidators: true },
  );

  if (!Updateduser)
    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ success: false, message: "Email update failed" });

  const updatedStudent = await Student.findByIdAndUpdate(
    studentId,
    {
      email,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedStudent) {
    await User.findOneAndUpdate(
      { email: email },
      { email: oldEmail },
      { new: true, runValidators: true },
    );

    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ success: false, message: "Email update failed" });
  }

  res
    .status(STATUS_CODES.SUCCESS)
    .json({ success: true, message: "Email updated" });
});

export const totalStudents = expressAsyncHandler(async (req, res) => {
  const totalStudents = await Student.countDocuments();
  if (!totalStudents) {
    throw new Error({ success: false, message: "Internal server error" });
  }
  res
    .status(STATUS_CODES.SUCCESS)
    .json({ success: true, totalStudents: totalStudents });
});

// export const teacherOwnStudets = expressAsyncHandler(async()=>{
//   const students = await
// })
