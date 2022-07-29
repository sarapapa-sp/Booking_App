import express from "express"
import {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getHotel,
    getHotels,
    updateHotel
} from "../controller/hotel.js";

import {verifyAdmin} from "../util/verifyToken.js";


const hotelrouter = express.Router()

//Create
hotelrouter.post("/",verifyAdmin, createHotel)

//Update
hotelrouter.put("/:id",verifyAdmin,updateHotel );
//Delete
hotelrouter.delete("/:id",verifyAdmin ,deleteHotel)
//GET
hotelrouter.get("/find/:id", getHotel)
//GET ALL
hotelrouter.get("/", getHotels );
// geeting featured hotels
hotelrouter.get("/countByCity", countByCity );
hotelrouter.get("/countByType", countByType );

export default hotelrouter