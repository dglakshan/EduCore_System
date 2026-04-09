import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { ROLES, STATUS_CODES } from "../utils/constants.js";

export const superAdminMiddleware = expressAsyncHandler(
  async (req, res, next) => {
    const count = await User.countDocuments({ role: ROLES.SUPER_ADMIN });

    if (count === 0) {
      next();
    } else {
      res
        .status(STATUS_CODES.FORBIDDEN)
        .json({ success: false, message: "Super admin already registered" });
    }
  },
);
