import mongoose, { connect } from "mongoose";
import asyncHandler from "express-async-handler";
import { DB_NAME } from "../../constants.js";


const connectDB = asyncHandler(async(req,res)=>{
    let client = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`Database connected at ${client.connection.host}`);
})

export default connectDB;