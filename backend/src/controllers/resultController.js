import expressAsyncHandler from "express-async-handler";
import Result from "../models/resultModel.js";
import Student from "../models/studentModel.js";
import Teacher from "../models/teacherModel.js";
import { STATUS_CODES } from "../utils/constants.js";
import Class from "../models/classModel.js";

export const resultAdding = expressAsyncHandler(async (req, res) => {
  const {
    student,
    subject,
    term,
    score,
    assessmentType,
    remarks,
    isPublished,
  } = req.body;

  const { _id } = req.user;
  const isStudentAvalable = await Student.findOne({
    studentId: student,
  });

  console.log(isStudentAvalable.class);
  if (!isStudentAvalable)
    return res.status(STATUS_CODES.NOT_FOUND).json({
      success: false,
      message: `No student found for the given ID: ${student}`,
    });

  const studentObjectId = isStudentAvalable._id;

  const isResultAvalable = await Result.findOne({
    student: studentObjectId,
    subject,
    term,
    assessmentType,
  });

  if (isResultAvalable)
    return res
      .status(STATUS_CODES.FORBIDDEN)
      .json({ success: false, message: "Result already added" });

  try {
    const newRestlt = await Result.create({
      student: isStudentAvalable._id,
      class: isStudentAvalable.class,
      enteredBy: _id,
      subject,
      term,
      mark: {
        subjectName: subject,
        score,
      },
      assessmentType,
      remarks,
      isPublished,
    });

    console.log(student.class);
    res
      .status(STATUS_CODES.SUCCESS)
      .json({ success: true, message: "Result added" });
  } catch (err) {
    res.status(STATUS_CODES.SERVER_ERROR);
    throw err;
    return;
  }
});

export const avarageScoreOfClasses = expressAsyncHandler(
  async ({ classesObjectIdsArray, term }) => {
    const totalAvarage = await Promise.all(
      classesObjectIdsArray.map(async (item) => {
        const result = await Result.getClassAvarageScore({
          classObjectId: item._id,
          term,
        });

        return result.finalAvarage;
      }),
    ).then(
      (result) =>
        Math.round(
          result.reduce((score, totalScore) => score + totalScore, 0) * 10,
        ) / 10,
    );

    return totalAvarage;
  },
);
