import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },

    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },

    studentId: {
      type: String,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
      lowercase: true,
    },

    parents: {
      mother: {
        name: { type: String, required: true },
        job: { type: String, default: "" },
        phone: { type: String, default: "" },
        email: { type: String, default: "" },
      },

      father: {
        name: { type: String, required: true, default: "" },
        job: { type: String, default: "" },
        phone: { type: String, default: "" },
        email: { type: String, default: "" },
      },
    },

    guardian: {
      name: { type: String, required: true, default: "" },
      job: { type: String, default: "" },
      phone: { type: String, default: "" },
      email: { type: String, default: "" },
    },

    phone: {
      type: String,
      default: "",
    },

    avatar: {
      type: String,
      default: "",
    },

    enrollmentDate: {
      type: Date,
      default: new Date(),
    },

    grade: {
      type: String,
      enum: {
        values: [
          "grade 6",
          "grade 7",
          "grade 8",
          "grade 9",
          "grade 10",
          "grade 11",
          "grade 12",
          "grade 13",
        ],
        message: "{VALUE} is not valid",
      },
      required: [true, "Grade is required"],
    },

    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },

    date_of_birth: {
      type: String,
      required: [true, "Date of birth is required"],
      validate: {
        validator: function (value) {
          const enterdDate = new Date(value);
          const nowDate = new Date();
          nowDate.setFullYear(nowDate.getFullYear() - 100);
          return enterdDate >= nowDate;
        },
        message: "Enter valid Date of birth",
      },
    },

    subjects: {
      type: [String],
      required: [true, "Subject is required"],
      validate: {
        validator: function (value) {
          return Array.isArray(value) && value.length >= 1;
        },
      },
    },

    status: {
      type: String,
      enum: {
        values: ["active", "inActive", "pending"],
        message: "Status must be Active , Inactive or Pending",
      },
      default: "",
    },

    notes: {
      type: String,
      default: "",
      select: false,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  },
);

studentSchema.index({ grade: 1, status: 1 });
studentSchema.index({ class: 1 });

studentSchema.pre("save", async function () {
  if (this.studentId) return;

  try {
    const year = new Date().getFullYear();
    const count = await mongoose.model("Student").countDocuments();
    this.studentId = `STU-${year}-${String(count + 1).padStart(3, "0")}`;
  } catch (err) {
    throw err;
  }
});

studentSchema.virtual("age").get(function () {
  if (!this.date_of_birth) return null;
  const today = new Date();
  const birth = new Date(this.date_of_birth);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
