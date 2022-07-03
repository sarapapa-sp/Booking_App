import express from "express"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controller/hotel.js";
import Hotel from "../models/Hotels.js"


const hotelrouter = express.Router()

//Create
hotelrouter.post("/", createHotel)

//Update
hotelrouter.put("/:id",updateHotel );
//Delete
hotelrouter.delete("/:id", deleteHotel)
//GET
hotelrouter.get("/:id", getHotel)
//GET ALL
hotelrouter.get("/", getHotels );

export default hotelrouter