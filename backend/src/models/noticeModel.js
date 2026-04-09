import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      maxlenght: [150, "Title cannot exceed 150 characters"],
      trim: true,
    },

    body: {
      type: String,
      required: [true, "Body is required"],
      maxlength: [2000, "Body cannot exceed 2000 characters"],
      trim: true,
    },

    targetRole: {
      type: String,
      enum: {
        values: ["all", "teacher", "student", "admin"],
        message: "Target role must be all, teacher, student or admin",
      },
      default: "all",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User reference is required"],
    },

    priority: {
      type: String,
      enum: {
        values: ["normal", "important", "urgent"],
        message: "Priority must be normal, important or urgent",
      },
      default: "normal",
    },

    category: {
      type: String,
      trim: true,
      default: "Genaral",
    },

    expiresAt: {
      type: Date,
      default: null,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    readBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    attachment: {
      type: String,
      default: null,
    },
  },

  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

noticeSchema.index({ targetRole: 1, isActive: 1 });
noticeSchema.index({ createdBy: 1 });
noticeSchema.index({ priority: 1 });
noticeSchema.index({ expiresAt: 1 });

noticeSchema.virtual("isExpired").get(function () {
  if (!this.expiresAt) return false;
  return new Date() > new Date(this.expiresAt);
});

noticeSchema.virtual("readCount").get(function () {
  return this.readBy ? this.readBy.length : 0;
});

noticeSchema.methods.markAsRead = async function (userId) {
  if (!this.readBy.includes(userId)) {
    this.readBy.push(userId);
    await this.save();
  }
};

const Notice = mongoose.model("Notice", noticeSchema);
export default Notice;
