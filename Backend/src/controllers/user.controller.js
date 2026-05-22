import userCollection from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import ErrorHandler from "../utils/errorHandler.js";
import { generateToken } from "../utils/token.js";

const isProd = process.env.NODE_ENV === "production";

const cookieOptions = {
  httpOnly: true,
  secure: isProd,
  sameSite: isProd ? "none" : "lax",
  maxAge: 24 * 60 * 60 * 1000,
};

const sanitizeUser = (user) => ({
  _id: user._id,
  fullName: user.fullName,
  email: user.email,
  createdAt: user.createdAt,
});

export const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    throw new ErrorHandler("All fields are required", 400);
  }

  const existingUser = await userCollection.findOne({ email });
  if (existingUser) throw new ErrorHandler("Email already exists", 409);

  const newUser = await userCollection.create({ fullName, email, password });

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: sanitizeUser(newUser),
  });
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ErrorHandler("Enter all the required fields", 400);
  }

  const existingUser = await userCollection.findOne({ email });
  if (!existingUser) throw new ErrorHandler("Please register first", 404);

  const isMatch = await existingUser.comparePassword(password);
  if (!isMatch) throw new ErrorHandler("Invalid password", 401);

  const token = generateToken(existingUser._id, existingUser.tokenVersion);

  res.cookie("token", token, cookieOptions);

  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    token,
    user: sanitizeUser(existingUser),
  });
});

export const logout = asyncHandler(async (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      ...cookieOptions,
      maxAge: 0,
    })
    .json({
      success: true,
      message: "User logged out successfully",
    });
});
