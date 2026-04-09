import Class from "../models/classModel.js";
import Teacher from "../models/teacherModel.js";
import User from "../models/userModel.js";
import { ROLES, STATUS_CODES } from "../utils/constants.js";
import { generateToken } from "../utils/generateToken.js";
import expressAsyncHandler from "express-async-handler";

// User login

export const userLogin = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ success: false, message: "User not found" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res
      .status(STATUS_CODES.FORBIDDEN)
      .json({ success: false, message: "Invalid password" });
  }

  const token = generateToken(user._id, email, user.role);

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  res
    .status(STATUS_CODES.SUCCESS)
    .json({ success: true, message: "Login success" });
});

// User logout

export const userLogout = expressAsyncHandler(async (req, res) => {
  res.cookie("token", "", { httpOnly: true, expired: new Date(0) });

  res
    .status(STATUS_CODES.SUCCESS)
    .json({ success: true, message: "Logout successfuly" });
});

// SuperAdmin register

export const superAdminRegister = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    name,
    email,
    password,
    role: ROLES.SUPER_ADMIN,
  });

  await newUser.save();
  res
    .status(STATUS_CODES.CREATED)
    .json({ success: true, message: "Super admin account created" });
});

// Admin register

export const adminRegister = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({
    name,
    email,
    password,
    role: ROLES.ADMIN,
  });

  await newUser.save();

  res
    .status(STATUS_CODES.CREATED)
    .json({ success: true, message: "Super admin account created" });
});

// Teacher register

export const teacherRegister = expressAsyncHandler(async (req, res) => {
  const password = generatePassword();

  const { email, name, subjects, department, status, employmentType } =
    req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res
      .status(STATUS_CODES.UNAUTHORIZED)
      .json({ success: false, message: "User already registered" });
  }

  const newUser = await User.create({
    name,
    email,
    password,
    role: ROLES.TEACHER,
  });

  await newUser.save();

  const newTeacher = await Teacher.create({
    name,
    email,
    subjects,
    department,
    status,
    employmentType,
  });

  await newTeacher.save();

  res
    .status(STATUS_CODES.CREATED)
    .json({ success: true, message: "New teracher added" });
});

// Student register

export const studentRegister = expressAsyncHandler(async (req, res) => {
  const { email, name, className, subjects, grade, status } = req.body;

  const password = generatePassword();

  const existingUser = await User.findOne({ email });

  const existingClass = await Class.findOne({ className });

  if (existingUser) {
    return res
      .status(STATUS_CODES.UNAUTHORIZED)
      .json({ success: false, message: "Student already added" });
  }

  if (!existingClass) {
    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ success: false, message: "Class not found" });
  }

  const newUser = await User.create({
    name,
    email,
    password,
    role: ROLES.STUDENT,
  });

  await newUser.save();
  const newStudent = await Student.create({
    user: newUser._id,
    name,
    email,
    class: existingClass._id,
    subjects,
    grade,
    status,
  });

  await newStudent.save();

  existingClass.students.push(newStudent._id);
  await existingClass.save();

  res
    .status(STATUS_CODES.CREATED)
    .json({ success: true, message: "New student added" });
});
