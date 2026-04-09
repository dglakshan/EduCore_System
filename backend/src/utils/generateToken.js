import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (id, email, role) => {
  return jwt.sign(
    {
      id: id,
      email: email,
      role: role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
};
