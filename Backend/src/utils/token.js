import jwt from "jsonwebtoken";

export const generateToken = (id, tokenVersion) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not set in environment variables");
  }
  return jwt.sign({ id, tokenVersion }, secret, { expiresIn: "1d" });
};
