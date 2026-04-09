import Class from "../models/classModel.js";
import Teacher from "../models/teacherModel.js";
import User from "../models/userModel.js";
import { STATUS_CODES } from "../utils/constants.js";
import expressAsyncHandler from "express-async-handler";

// Assing to teacher for class

export const assingToClass = expressAsyncHandler(async (req, res) => {
  const { teacherId, className } = req.body;

  const teacher = await Teacher.findOne(teacherId);

  if (!teacher) {
    return res.status(STATUS_CODES.UNAUTHORIZED).json({
      success: false,
      message: "Teacher not found with given teacher ID",
    });
  }

  const _class = await Class.findOne(className);

  if (_class) {
    return res.status(STATUS_CODES.UNAUTHORIZED).json({
      success: false,
      message: "Class not found with given class Name",
    });
  }

  _class.teacher = teacher._id;
  await _class.save();

  teacher.classes.push(_class._id);
  await teacher.save();

  res.status(STATUS_CODES.SUCCESS).json({
    success: false,
    message: `Teacher ID ${teacherId} has been successfully assigned to ${className}.`,
  });
});

export const teacherUpdate = expressAsyncHandler(async (req, res) => {
  const { teacherId, name, classNames, subjects, department, employmentType } =
    req.body;

  const classIds = classNames.map(async (item) => {
    const _class = await Class.findOne({ className: item });
    return _class._id;
  });

  await Teacher.findByIdAndUpdate(
    teacherId,
    {
      name,
      subjects,
      department,
      employmentType,
      class: classIds,
    },
    { new: true, runValidators: true },
  );
  res
    .status(STATUS_CODES.SUCCESS)
    .json({ success: true, message: "Teacher updated" });
});

export const updateTeacherEmil = expressAsyncHandler(async (req, res) => {
  const { email, teacherId } = req.body;

  const teacher = await Student.findById(teacherId);

  const oldEmail = teacher.email;

  if (!teacher)
    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ success: false, message: "Student not found" });

  const isEmailTaken = await User.findOne({ email });

  if (isEmailTaken)
    return res
      .status(STATUS_CODES.FORBIDDEN)
      .json({ success: false, message: "Email already registered" });

  const UpdatedUser = await User.findByIdAndUpdate(
    teacher.user,
    {
      email,
    },
    { new: true, runValidators: true },
  );

  if (!UpdatedUser)
    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ success: false, message: "Email update failed" });

  const updatedTeacher = await Student.findByIdAndUpdate(
    teacherId,
    {
      email,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedTeacher) {
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

export const allTeachers = expressAsyncHandler(async () => {
  const teachers = await Teacher.countDocuments();
  if (!teachers) {
    throw new Error("Internal server error");
  }
  return teachers;
});

//Teacher dashboard start

export const ownStudents = expressAsyncHandler(async (req, res) => {
  const { teacherId } = req.body;

  const classData = await Class.find(teacherId);
});
