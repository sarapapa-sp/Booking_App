import express from "express";
import {createUser, deleteUser, getUser, getUsers, updateUser} from "../controller/user.js";
import {verifyAdmin, verifyToken, verifyUser,} from "../util/verifyToken.js";
import user from "../models/User.js";


const userrouter = express.Router()
//
// // verifying the token
// userrouter.get("/authentication",verifyToken , (req,res,next) => {
//     res.send("Hello User YOu are authenticated")
// })
//
// userrouter.get("/checkuser/:id",verifyUser,(req,res,next) => {
//     res.send("You are Authorised to delete")
// })
//
// userrouter.get("/checkadmin/:id",verifyAdmin,(req,res,next) => {
//     res.send("You are Authorised Admin to delete")
// })

// //create
// userrouter.post("/",createUser)
//update
userrouter.put("/:id",verifyUser,updateUser)
//delete
userrouter.delete("/:id",verifyUser,deleteUser)
//get
userrouter.get("/:id",verifyUser,getUser)
//getAll
userrouter.get("/",verifyAdmin,getUsers)


export default userrouter