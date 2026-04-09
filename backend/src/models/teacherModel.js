import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
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

    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, "Email is required"],
    },

    teacherId: {
      type: String,
      unique: true,
      trim: true,
    },

    classes: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Class",
        },
      ],
      validate: {
        validator: function (data) {
          return data && data.length > 0;
        },
      },
    },

    subjects: {
      type: [String],
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
        message: "{VALUE} is not a valid subject",
      },
    },

    experience: {
      type: Number,
      min: [0, "Exprereance cannot be negative"],
      max: [50, "Expereance cannot exceed 50 years"],
      default: 0,
    },

    department: {
      type: String,
      trim: true,
      default: "",
    },

    joinDate: {
      type: Date,
      default: new Date(),
    },

    employmentType: {
      type: String,
      enum: {
        values: ["full-time", "part-time"],
        message: "Emplotment type must be full time or part time",
      },
      default: "full-time",
    },

    qualifications: {
      type: String,
      trim: true,
      default: "",
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    date_of_birth: {
      type: String,
      required: [true, "Date of birth is required"],
      validate: {
        validator: function (value) {
          const nowDate = new Date();
          nowDate.setFullYear(nowDate.getFullYear - 18);
          return value >= nowDate;
        },
        message: "Enter valid Date of birth",
      },
    },

    address: {
      type: String,
      trim: true,
      default: "",
    },

    rating: {
      type: Number,
      min: [1, "Rating must be at lesat 1"],
      max: [5, "Rating cannot exceed 5"],
      default: 1.0,
    },

    avatar: {
      type: String,
      default: "",
    },

    totalStudent: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: {
        values: ["active", "inactive", "onLeave"],
        message: "Status must be active, inactive or onLeave",
      },
      default: "active",
    },
  },

  {
    timestamps: true,
    versionKey: false,
  },
);

teacherSchema.index({ subject: 1 });
teacherSchema.index({ employmentType: 1 });
teacherSchema.index({ status: 1 });

teacherSchema.pre("save", async function (next) {
  if (!this.teacherId) return next();

  try {
    const count = await mongoose.model("Teacher").countDocuments();
    this.teacherId = `TCH-${String(count + 1).padStart(3, "0")}`;
  } catch (err) {
    next(err);
  }
});

teacherSchema.virtual("age").get(function () {
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

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
