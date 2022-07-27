import Room from "../models/Rooms.js"
import Hotel from "../models/Hotels.js"


export const createRoom = async (req,res,next) =>{

    const hotelId = req.params.hotelid
    const newRoom = new Room(req.body)



    try{
        const saveRoom = await newRoom.save()
        console.log("Room saved"+saveRoom)
        // adding the room id to the given hotel id
        try {
            await Hotel.findByIdAndUpdate(hotelId,
                {
                    $push:{
                        rooms:saveRoom._id
                    }
                })
        }catch (err){
            console.log("Entered error 1")
            res.status(500).json(err);
        }
        res.status(200).json(saveRoom)
    }catch (err){
        console.log("Entered error 2")
        res.status(500).json(err);
    }
}


export const updateRoom = async (req, res) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedRoom);
        console.log("Updated the data for ");
    } catch (err) {
        res.status(500).json(err);
    }
};

export const deleteRoom = async (req, res) => {
    const hotelId = req.params.hotelid
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId,
                {
                    $pull:{
                        rooms:req.params.id
                    }
                })
        }catch (err){
            console.log("Entered error 1")
            res.status(500).json(err);
        }
        res.status(200).json("Entry has been removed");
        console.log("Entry was removed from the DB for Room ");
    } catch (err) {
        console.log("Error 2 ")
        res.status(500).json(err);
    }
};

export const getRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
        console.log("Entry was found" + req.params.id);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getRooms = async (req, res,next) => {
    try {
        const room = await Room.find()
        res.status(200).json(room);
        console.log("Entry was found");
    } catch (err) {
        next(err)
    }
};