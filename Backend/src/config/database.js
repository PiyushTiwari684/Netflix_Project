import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";

// Cache the connection across serverless invocations.
let cached = global.__mongooseConn;
if (!cached) {
  cached = global.__mongooseConn = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const uri = process.env.MONGODB_URL;
    if (!uri) {
      throw new Error("MONGODB_URL is not set in environment variables");
    }
    cached.promise = mongoose
      .connect(`${uri}/${DB_NAME}`, {
        bufferCommands: false,
      })
      .then((m) => {
        console.log(`Database connected at ${m.connection.host}`);
        return m;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectDB;
