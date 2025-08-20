import userCollection from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import ErrorHandler from "../utils/errorHandler.js";
import { generateToken } from "../utils/token.js";

// let us register the user
export const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    res.status(400).json({
      message: "invalid data",
      success: false,
    });
  }
  let existingUser = await userCollection.findOne({ email });
  if (existingUser) throw new ErrorHandler("email already exists", 409);

  let newUser = await userCollection.create({ fullName, email, password });

  res.status(201).json({
    success: true,
    message: "user registered successfully",
    data: newUser,
  });
});

// login controller

export const loginUser = asyncHandler(async (req, res) => {
  let { email, password } = req.body;

  if (!email || !password)
    throw new ErrorHandler("Enter All the Required Fields", 403);

  let existingUser = await userCollection.findOne({ email });
  if (!existingUser) throw new ErrorHandler("Please Register !!!", 404);

  let isMatch = await existingUser.comparePassword(password);
  if (!isMatch) throw new ErrorHandler("Invalid Password", 401);

  let token = await generateToken(existingUser._id, existingUser.tokenVersion);

  res.cookie("myCookie", token, {
    maxAge: 1 * 60 * 60 * 1000,
    secure: false,
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "User Loggged in Successfully",
    token,
    user: existingUser,
  });
});

// logout user
export const logout = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true })
    .json({
      success: true,
      message: "User Logout successfully",
    });
});
