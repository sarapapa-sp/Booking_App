import express from "express";
import {createUser, deleteUser, getUser, getUsers, updateUser} from "../controller/user.js";
import {verifyToken, verifyUser,} from "../util/verifyToken.js";
import user from "../models/User.js";


const userrouter = express.Router()

// verifying the token
userrouter.get("/authentication",verifyToken , (req,res,next) => {
    res.send("Hello User YOu are authenticated")
})

userrouter.get("/checkuser/:id",verifyUser,(req,res,next) => {
    res.send("You are Authorised to delete")
})

//create
userrouter.post("/",createUser)
//update
userrouter.put("/:id",updateUser)
//delete
userrouter.delete("/:id",deleteUser)
//get
userrouter.get("/:id",getUser)
//getAll
userrouter.get("/",getUsers)


export default userrouter