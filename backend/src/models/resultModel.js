import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: [true, "Student reference is required"],
    },

    class: {
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

    mark: {
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
      },
    },

    // rank: {
    //   type: Number,
    //   default: null,
    // },

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

// resultSchema.pre("save", function () {
//   this.totalMarks = 0;
//   this.marks.forEach((item) => {
//     this.totalMarks += item.score;
//   });
// });

resultSchema.pre("save", function () {
  if (this.isModified || this.isNew) {
    if (this.mark.score >= 75) this.mark.gradeValue = "A";
    else if (this.mark.score >= 65) this.mark.gradeValue = "B";
    else if (this.mark.score >= 50) this.mark.gradeValue = "C";
    else if (this.mark.score >= 35) this.mark.gradeValue = "S";
    else this.mark.gradeValue = "W";
  }
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

resultSchema.statics.getSubjectAvarageScore = async function ({
  subjectName,
  classObjectId,
}) {
  const result = await this.aggregate([
    { $match: { subject: subjectName, class: classObjectId } },
    {
      $group: {
        _id: null,
        avarageScore: { $avg: "$mark.score" },
      },
    },
  ]);

  return result;
};

resultSchema.statics.getClassAvarageScore = async function ({
  classObjectId,
  term,
}) {
  const result = await this.aggregate([
    {
      $match: {
        class: classObjectId,
        term,
      },
    },
    {
      $group: {
        _id: "$subject",
        subjectAvarage: { $avg: "$mark.score" },
      },
    },
    {
      $group: {
        _id: null,
        finalAvarage: { $avg: "$subjectAvarage" },
      },
    },
    {
      $project: { _id: 0, finalAvarage: 1 },
    },
  ]);

  if (result.length === 0) return { finalAvarage: 0 };

  return result[0];
};

resultSchema.statics.getStudentAvarageScore = async function ({
  StudentId,
  term,
}) {
  const results = await this.aggregate([
    { $match: { term: term, StudentId: StudentId } },
    {
      $group: {
        _id: null,
        studentAvarage: { $avg: "$mark.score" },
      },
    },
  ]);

  return results;
};

resultSchema.statics.updateClassRanking = async function ({
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
