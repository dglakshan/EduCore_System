import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      unique: true,
      trim: true,
      uppercase: true,
      required: [true, "ClassName is required"],
    },

    grade: {
      type: "String",
      required: [true, "Grade is required"],
      enum: {
        values: [
          "Grade 6",
          "Grade 7",
          "Grade 8",
          "Grade 9",
          "Grade 10",
          "Grade 11",
          "Grade 12",
          "Grade 13",
        ],
        message: "{VALUE} is not a valid grade",
      },
    },

    classTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      default: null,
    },

    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        default: null,
      },
    ],

    subjects: [
      {
        subject: {
          type: String,
          enum: [
            "Mathematics",
            "Science",
            "English",
            "Sinhala",
            "History",
            "ICT",
            "Arts",
            "Physical Education",
            "Religion",
          ],
          required: true,
        },

        teacher: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Teacher",
          required: true,
        },
      },
    ],

    capacity: {
      type: Number,
      required: [true, "Capacity is required"],
      min: [1, "Capacity must be at least 1"],
      max: [60, "Capacity cannot exceed 60"],
      default: 35,
    },

    academicYear: {
      type: String,
      default: () => new Date().getFullYear().toString(),
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,

    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

classSchema.index({ grade: 1, isActive: 1 });
classSchema.index({ classTeacher: 1 });
classSchema.index({ acadamicYear: 1 });

classSchema.virtual("Student-Count").get(function () {
  return this.students ? this.students.length : 0;
});

classSchema.virtual("Fill-Rate").get(function () {
  if (!this.capacity || this.capacity === 0) return 0;
  return Math.round((this.capacity / this.students) * 100);
});

const Class = mongoose.model("Class", classSchema);
export default Class;
