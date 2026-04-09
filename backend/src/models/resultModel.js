import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    Student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: [true, "Student reference is required"],
    },

    calss: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: [true, "Class reference is required"],
    },

    enteredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: [true, "Tecaher reference is required"],
    },

    subject: {
      type: String,
      required: true,
      enum: {
        values: [
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
      },
    },

    term: {
      type: String,
      required: [true, "Term is required"],
      enum: {
        values: ["Term 1", "Term 2", "Term 3"],
        message: "Term must be Term 1 , Term 2 or Term 3",
      },
    },

    releaseDate: {
      type: String,
      default: new Date(),
    },

    marks: [
      {
        subjectName: {
          type: String,
          required: [true, "Subject Name is required"],
        },
        score: {
          type: Number,
          required: [true, "Score is required"],
          min: [0, "Score cannot less than 0"],
          max: [100, "Score cannot exceed 100"],
        },
        gradeValue: {
          type: String,
          enum: {
            values: ["A", "B", "C", "S", "W"],
            message: "Grade must be A, B, C, S or W",
          },
          default: null,
        },
      },
    ],

    rank: {
      type: Number,
      default: null,
    },

    totalMarks: {
      type: String,
      default: 0,
    },

    assessmentType: {
      type: String,
      enum: {
        values: ["exam", "assignment", "quiz", "practical"],
        message: "Assessment type must be exam, assignment, quiz, or practical",
      },
      default: "exam",
    },

    remarks: {
      type: String,
      trim: true,
      maxlength: [300, "Remarks cannot exceed 300 characters"],
      default: "",
    },

    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

resultSchema.index(
  { Student: 1, subject: 1, term: 1, assessmentType: 1 },
  { unique: true, name: "unique_student_subject_term_assessmentType" },
);

resultSchema.index({ Student: 1, term: 1 });
resultSchema.index({ class: 1, subject: 1, term: 1 });
resultSchema.index({ score: -1 });
resultSchema.index({ isPublished: 1 });

resultSchema.pre("save", function (next) {
  this.totalMarks = 0;
  this.marks.forEach((item) => {
    this.totalMarks += item.score;
  });
  next();
});

resultSchema.pre("save", function (next) {
  if (this.isModified || this.isNew) {
    if (this.marks.score >= 75) this.marks.gradeValue = "A";
    else if (this.marks.score >= 65) this.marks.gradeValue = "B";
    else if (this.marks.score >= 50) this.marks.gradeValue = "C";
    else if (this.marks.score >= 35) this.marks.gradeValue = "S";
    else this.marks.gradeValue = "W";
  }
  next();
});

resultSchema.virtual("isPassed").get(function () {
  return this.score >= 35;
});

resultSchema.virtual("gradeLebal").get(function () {
  const lebals = {
    A: "Excellent",
    B: "very Good",
    C: "Good",
    S: "Avarage",
    W: "Failure",
  };

  return lebals[this.marks.gradeValue];
});

resultSchema.static.getStudentAvarage = async function (StudentId, term) {
  const results = this.find({
    Student: StudentId,
    term: term,
    assessmentType: "exam",
    isPublished: true,
  });

  if (results.lenght == 0) return 0;

  const total = results.reduce((sum, r) => sum + r.marks.score, 0);

  const average = Math.round((total / results.length) * 10) / 10;

  return average;
};

resultSchema.static.updateClassRanking = async function ({
  className,
  subject,
  term,
}) {
  const results = await this.find({
    className,
    subject,
    term,
  }).sort({ score: -1 });

  for (let index = 0; index < results.length; index++) {
    await this.findByIdAndUpdate(results[index]._id, { rank: index + 1 });
  }
};

const Result = mongoose.model("Result", resultSchema);
export default Result;
