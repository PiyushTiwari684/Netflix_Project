import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

export const generateToken = asyncHandler(async (id, tokenVersion) => {
    console.log(id, tokenVersion);
    
  let token = jwt.sign({ id, tokenVersion }, "Secret-key", {
    expiresIn: "1d",
  });
  return token;
});
