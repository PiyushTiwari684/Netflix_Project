import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./src/config/database.js";
import userRoute from "./src/routes/user.routes.js";
import errorMiddleware from "./src/middleware/error.middleware.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
  })
);

// Ensure DB is connected before handling any request (serverless-safe).
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    next(err);
  }
});

app.get("/", (req, res) => {
  res.json({ activeStatus: true, error: false });
});

app.use("/user/v1", userRoute);

app.use(errorMiddleware);

// Local development: start a listener. On Vercel, the app is imported as a handler.
if (!process.env.VERCEL) {
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`Server listening at PORT ${port}`);
  });
}

export default app;
