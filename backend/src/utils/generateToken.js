import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (_id, email, role) => {
  return jwt.sign(
    {
      _id,
      email,
      role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
};
