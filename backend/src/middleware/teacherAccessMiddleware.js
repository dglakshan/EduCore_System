import Student from "../models/studentModel.js";
import { STATUS_CODES } from "../utils/constants.js";

export const teacherAccessMiddleware = async (req, res, next) => {
  const email = req.params.email;

  try {
    await Student.findOne({ email });
    next();
  } catch (err) {
    res.status(STATUS_CODES.NOT_FOUND);
    throw new Error("Student not found with given email");
  }
};
