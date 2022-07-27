import express from "express"

import {verifyAdmin} from "../util/verifyToken.js";
import {createRoom, deleteRoom, getRoom, getRooms, updateRoom} from "../controller/room.js";


const roomrouter = express.Router()

//Create
roomrouter.post("/:hotelid",verifyAdmin, createRoom)

//Update
roomrouter.put("/:id",verifyAdmin,updateRoom );
//Delete
roomrouter.delete("/:id/:hotelid",verifyAdmin ,deleteRoom)
//GET
roomrouter.get("/:id", getRoom)
//GET ALL
roomrouter.get("/", getRooms );

export default roomrouter