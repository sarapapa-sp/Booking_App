import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authroute from "./routes/auth.js";
import hotelroute from "./routes/hotels.js";
import userroute from "./routes/user.js";
import cookieParser from "cookie-parser"
import roomrouter from "./routes/rooms.js";
const app = express();
dotenv.config();
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Eroor Occured");
    handleError(error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected");
});

//middlewares
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authroute);
app.use("/api/hotels", hotelroute);
app.use("/api/users", userroute);
app.use("/api/rooms", roomrouter);
app.use((err, req, res, next) => {
  const errorStatus = err.status;
  const message = err.message;
  return res.status(500).json({
    success: false,
    status: errorStatus,
    message: message,
    stack: err.stack,
  });
});

app.listen(8080, () => {
  connect();
  console.log("Connected to the backend ");
});
