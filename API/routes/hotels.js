import express from "express"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controller/hotel.js";

import {verifyAdmin} from "../util/verifyToken.js";


const hotelrouter = express.Router()

//Create
hotelrouter.post("/",verifyAdmin, createHotel)

//Update
hotelrouter.put("/:id",verifyAdmin,updateHotel );
//Delete
hotelrouter.delete("/:id",verifyAdmin ,deleteHotel)
//GET
hotelrouter.get("/:id", getHotel)
//GET ALL
hotelrouter.get("/", getHotels );

export default hotelrouter