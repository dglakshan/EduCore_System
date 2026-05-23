import Class from "../models/classModel.js";
import Teacher from "../models/teacherModel.js";
import User from "../models/userModel.js";
import { ROLES, STATUS_CODES } from "../utils/constants.js";
import { generatePassword } from "../utils/generatePassword.js";
import { generateToken } from "../utils/generateToken.js";
import expressAsyncHandler from "express-async-handler";
import { sendWelcomeEmail } from "../utils/sendEmail.js";
import Student from "../models/studentModel.js";

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
    path: "/",
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

export const userInfo = expressAsyncHandler(async (req, res) => {
  const { _id, email, role } = req.user;
  const userData = { _id, email, role };

  if (_id && email && role) {
    return res
      .status(STATUS_CODES.SUCCESS)
      .json({ success: true, data: userData });
  }
});

// User delete

export const deleteUser = expressAsyncHandler(async (req, res) => {
  const email = req.params.email;

  const user = await User.findOne({ email });

  if (user) {
    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ success: false, message: "User not found" });
  }

  try {
    if (user.role === "teacher") {
      await Teacher.findOneAndDelete({ email: user.email });
    } else if (user.role === "student") {
      await Student.findByIdAndDelete({ email: user.email });
    }

    await User.findByIdAndDelete(user._id);
  } catch (err) {
    res.status(STATUS_CODES.SERVER_ERROR);
    throw err;
  }

  res.status(STATUS_CODES.SUCCESS).json({
    success: true,
    message: "User and associated profiles deleted successfully",
  });
});

// SuperAdmin register

export const superAdminRegister = expressAsyncHandler(async (req, res) => {
  const { name, email } = req.body;

  const password = generatePassword();

  const newUser = await User.create({
    name,
    email,
    password,
    role: ROLES.SUPER_ADMIN,
  });

  const role = ROLES.SUPER_ADMIN;

  if (newUser) {
    await sendWelcomeEmail({ email, name, password, role });
  }

  res
    .status(STATUS_CODES.CREATED)
    .json({ success: true, message: "Super admin account created" });
});

// Admin register

export const adminRegister = expressAsyncHandler(async (req, res) => {
  const { name, email } = req.body;

  const password = generatePassword();

  const newUser = new User.create({
    name,
    email,
    password,
    role: ROLES.ADMIN,
  });

  const role = ROLES.ADMIN;

  if (newUser) {
    await sendWelcomeEmail({ email, name, password, role });
  }

  res
    .status(STATUS_CODES.CREATED)
    .json({ success: true, message: "Super admin account created" });
});

// Teacher register

export const teacherRegister = expressAsyncHandler(async (req, res) => {
  const {
    email,
    name,
    classNames,
    subjects,
    department,
    status,
    employmentType,
    date_of_birth,
  } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    res.status(STATUS_CODES.UNAUTHORIZED);
    throw new Error("User already registered");
  }

  const password = generatePassword();

  const newUser = await User.create({
    name,
    email,
    password,
    role: ROLES.TEACHER,
  });

  const classIdList = await Promise.all(
    classNames.map(async (item) => {
      const classDoc = await Class.findOne({ className: item });
      return classDoc ? classDoc._id : null;
    }),
  );

  const validClassList = classIdList.filter((id) => id !== null);

  if (validClassList.length === 0) {
    await User.findByIdAndDelete(newUser._id);
    res.status(STATUS_CODES.BAD_REQUEST);
    throw new Error("At least one valid class is required");
  }

  try {
    const newTeacher = await Teacher.create({
      user: newUser._id,
      name,
      email,
      classes: validClassList,
      subjects,
      department,
      status,
      employmentType,
      date_of_birth,
    });

    const role = ROLES.TEACHER;

    if (newTeacher) {
      await sendWelcomeEmail({ email, name, password, role });
    }

    res.status(STATUS_CODES.CREATED).json({
      success: true,
      message: "New teacher added successfully",
    });
  } catch (err) {
    await User.findByIdAndDelete(newUser._id);
    res.status(STATUS_CODES.SERVER_ERROR);
    throw err;
  }
});

// Student register

export const studentRegister = expressAsyncHandler(async (req, res) => {
  const {
    email,
    name,
    className,
    subjects,
    grade,
    status,
    date_of_birth,
    parents,
    guardian,
  } = req.body;

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

  if (!newUser) {
    res.status(STATUS_CODES.SERVER_ERROR);
    throw new Error("Internal server error");
  }
  try {
    const newStudent = await Student.create({
      user: newUser._id,
      name,
      email,
      class: existingClass._id,
      subjects,
      grade,
      status,
      date_of_birth,
      parents,
      guardian,
    });

    existingClass.students.push(newStudent._id);
    await existingClass.save();

    const role = ROLES.STUDENT;

    if (newStudent) {
      await sendWelcomeEmail({ email, name, password, role });
    }

    res
      .status(STATUS_CODES.CREATED)
      .json({ success: true, message: "New student added" });
  } catch (err) {
    await User.findByIdAndDelete(newUser._id);
    res.status(STATUS_CODES.SERVER_ERROR);
    throw err;
  }
});
