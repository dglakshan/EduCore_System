import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: [true, "Student referance is required"],
    },

    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: [true, "Class refderance is required"],
    },

    markedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: [true, "Teacher referance is required"],
    },

    attendanceDate: {
      type: String,
      required: [true, "Attendance date is required"],
    },

    status: {
      type: String,
      enum: {
        values: ["P", "A", "L"],
        message:
          "Attendance status must be P (Present), A (Absent) or L (Late)",
      },
      required: [true, "Attendance is required"],
      default: "P",
    },

    remark: {
      type: String,
      trim: true,
      maxlength: [200, "Remark cannot exceed 200 characters"],
      default: "",
    },

    // subject: {
    //   type: String,
    //   default: null,
    // },

    term: {
      type: String,
      enum: {
        values: ["Term 1", "Term 2", "Term 3"],
        message: "Term must be Term 1,Term 2 or Term 3",
      },
      required: [true, "Term is required"],
    },

    academicYear: {
      type: String,
      default: () => new Date().getFullYear().toString(),
    },
  },

  {
    timestamps: true,
    versionKey: false,
  },
);

attendanceSchema.index(
  { student: 1, class: 1, attendanceDate: 1 },
  { unique: true, name: "student_class_attendanceDate" },
);
attendanceSchema.index({ student: 1, term: 1 });
attendanceSchema.index({ attendanceDate: 1, status: 1 });
attendanceSchema.index({ markedBy: 1 });

attendanceSchema.statics.getDayAllAttendanceOfClass = async function ({
  date,
  classObjectId,
}) {
  try {
    const result = await this.aggregate([
      { $match: { attendanceDate: date, class: classObjectId } },
      {
        $group: {
          _id: "$status",
          attendance: { $sum: 1 },
        },
      },
    ]);
    return result;
  } catch (err) {
    throw err;
  }
};

attendanceSchema.statics.getDayClassPresentCount = async function ({
  date,
  classObjectId,
}) {
  try {
    const result = await this.aggregate([
      { $match: { attendanceDate: date, status: "P", class: classObjectId } },
      {
        $group: {
          _id: null,
          attendance: { $sum: 1 },
        },
      },
    ]);

    return result.length > 0 ? result[0].attendance : 0;
  } catch (err) {
    throw err;
  }
};

attendanceSchema.statics.getDayAttendanceAvarageOfClass = async function ({
  date,
  classObjectId,
}) {
  const result = await this.aggregate([
    { $match: { attendanceDate: date, class: classObjectId } },
    {
      $group: {
        _id: null,
        avarageAttendance: {
          $avg: {
            $cond: { if: { $eq: ["$status", "P"] }, then: 100, else: 0 },
          },
        },
      },
    },
  ]);

  // console.log({ result: result });
  // console.log(result.length);
  // const finalResult = (result) => {
  //   if (result && result.length == 0) return { [date]: 0 };

  //   const finalOut = result.reduce((accumulator, currentValue) => {
  //     accumulator[date] = currentValue.avarageAttendance;
  //     return accumulator;
  //   }, {});
  //   return finalOut;
  // };

  return result;
};

attendanceSchema.statics.getDayAttendanceOfStudent = async function (
  studentId,
  date,
) {
  const result = await this.aggregate([
    { $match: { student: studentId, attendanceDate: date } },
    { $project: { status: 1 } },
  ]);

  return result;
};

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;
