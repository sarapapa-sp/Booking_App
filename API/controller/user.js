
import User from "../models/User.js"
import Hotel from "../models/Hotels.js";

export const createUser = async (req,res) => {
    const newUSer = new User(req.body);

    try{
        const saveUser = await newUSer.save();

        res.status(200).json(saveUser);
        console.log("User Created")
    }catch (err){
        res.status(500).json(err)
    }
}
export const updateUser = async (req, res) => {
    try {
        const updateduser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updateduser);
        console.log("Updated the data for ");
    } catch (err) {
        res.status(500).json(err);
    }
};

export const deleteUser = async (req,res) => {

    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
        console.log("User was deleteed")
    }catch (err){
        res.status(500).json(err)
    }
}

export const getUser = async (req,res) => {

    try{
        const user = new User.findById(req.params.id)
        res.status(200).json(user)
        console.log("Entry was found for user " +req.params.id )
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getUsers = async (req,res) => {
    try {
        const users = new User.find()
        res.status(200).json(users)
    }catch (err){
        next(err)
    }
}
