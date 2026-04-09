import expressAsyncHandler from "express-async-handler";
import Class from "../models/classModel.js";
import Student from "../models/studentModel.js";
import Teacher from "../models/teacherModel.js";
import { STATUS_CODES } from "../utils/constants.js";

export const classAdding = expressAsyncHandler(async (req, res, next) => {
  const {
    className,
    grade,
    subjects,
    capacity,
    acadamicYear,
    description,
    isActive,
    teacherId,
    studentIds,
  } = req.body;

  const isAvalable = await Class.findOne({ className });

  if (isAvalable)
    return res
      .status(STATUS_CODES.FORBIDDEN)
      .json({ success: false, message: "Class already added" });

  const SubjectTeacherObjectArray = subjects
    ? await Promise.all(
        subjects.map(async (item) => {
          const teacher = await Teacher.findById(item.teacherId);
          if (teacher) {
            throw new Error(`Teacher not found for subject ${item.subject}`);
          }
          return {
            subject: item.subject,
            teacher: teacher._id,
          };
        }),
      )
    : [];

  const studentArrayObject = studentIds
    ? await Promise.all(
        studentIds.map(async (item) => {
          const student = await Student.findById(item);
          if (!student) {
            throw new Error("Student not found");
          }

          return { student: student._id };
        }),
      )
    : [];

  let class_teacher_object_id = null;

  if (teacherId) {
    const class_teacher = await Teacher.findOne(teacherId);
    if (!class_teacher) {
      return res.status(STATUS_CODES.NOT_FOUND).json({
        success: false,
        message: `Teacher not found with given id ${teacherId}`,
      });
    }
    class_teacher_object_id = class_teacher._id;
  }

  const _class = await Class.create({
    className,
    grade,
    subjects: SubjectTeacherObjectArray,
    capacity,
    acadamicYear,
    description,
    isActive,
    classTeacher: class_teacher_object_id,
    students: studentArrayObject,
  });

  if (!_class) {
    return res
      .status(STATUS_CODES.SERVER_ERROR)
      .json({ success: false, message: "Internal server error" });
  }

  res
    .status(STATUS_CODES.SUCCESS)
    .json({ success: true, message: "Class added" });
});
