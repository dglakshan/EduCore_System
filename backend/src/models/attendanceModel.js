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
      type: Date,
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

    subject: {
      type: String,
      default: null,
    },

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
    versionKey: true,
  },
);

attendanceSchema.index(
  { student: 1, class: 1, attendanceDate },
  { unique: true, name: student_class_attendanceDate },
);
attendanceSchema.index({ student: 1, term: 1 });
attendanceSchema.index({ attendanceDate: 1, status: 1 });
attendanceSchema.index({ markedBy: 1 });

attendanceSchema.static.getDayOverAllAttendanceOfClass = async function (
  date,
  className,
) {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  const result = await this.find({
    attendanceDate: { $gte: startOfDay, $lte: endOfDay },
    className,
  });

  return {
    present: result.filter((r) => r.status === "P"),
    absent: result.filter((r) => r.status === "A"),
    late: result.filter((r) => r.status === "L"),
    total: result.length,
  };
};

attendanceSchema.static.getDayAttendanceOfStudent = async function (
  studentId,
  date,
) {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  const result = await this.find({
    attendanceDate: { $gte: startOfDay, $lte: endOfDay },
    studentId,
  });

  if (result.status === "p") {
    const attendance = result.filter((r) => r.status === "p");
    return attendance;
  } else if (result.status === "A") {
    const attendance = result.filter((r) => r.status === "A");
    return attendance;
  } else {
    const attendance = result.filter((r) => r.status === "L");
    return attendance;
  }
};

const Attendance = mongoose.Model("Attendance", attendanceSchema);
export default Attendance;
