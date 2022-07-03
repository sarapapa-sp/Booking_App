import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authroute from "./routes/auth.js";
import hotelroute from "./routes/hotels.js"

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

app.use(express.json())

app.use("/api/auth", authroute);
app.use("/api/hotels", hotelroute);
// app.use("/api/auth", authroute);
// app.use("/api/auth", authroute);


app.listen(8080, () => {
  connect();
  console.log("Connected to the backend ");
});
