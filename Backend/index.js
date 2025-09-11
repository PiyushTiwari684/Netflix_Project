// const express = require('express');
// remember that whenever you use modular importing in node make sure that you use .js as file extension while importing

import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

import express from "express";
import connectDB from "./src/config/database.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoute from "./src/routes/user.routes.js";
import error from "./src/middleware/error.middleware.js";

connectDB();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/user/v1", userRoute);
app.get('/',(req,res)=>{
  res.send({
    activeStatus:true,
    error:false,
  });
})

app.use(error);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at PORT ${process.env.PORT}`);
});
