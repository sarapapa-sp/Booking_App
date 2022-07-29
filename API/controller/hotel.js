
import Hotel from "../models/Hotels.js";
import {createError} from "../util/err.js";

export const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
    console.log("Entered");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
    console.log("Updated the data for ");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Entry has been removed");
    console.log("Entry was removed from the DB");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
    console.log("Entry was found" + req.params.id);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getHotels = async (req, res,next) => {
  const {max,min,...other} = req.query
  try {
    const hotel = await Hotel.find({
        ...other,
        cheapestPrice:{$gt: min | 1 , $lt : max || 999},}
    ).limit(req.query.limit);
    res.status(200).json(hotel);
    console.log("Entry was found");
  } catch (err) {
    next(err)
  }
};

export const countByCity =async (req,res,next)=>{
  const cities = req.query.city.split(",")
  // console.log(cities)
  try{
        const list = await  Promise.all(cities.map(city => {
          return Hotel.countDocuments({city:city})
        }))

    res.status(200).json(list)
  }catch (err){
    next(new createError(500,"Error"))
  }
}

export const countByType = async (req,res,next)=>{
    try{
      const hotelCount = await Hotel.countDocuments({type:"hotel"})
      const apartmentCount = await  Hotel.countDocuments({type:"apartment"})
      const resortCount = await  Hotel.countDocuments({type:"resort"})
      const villaCount = await  Hotel.countDocuments({type:"villa"})
      const cabinCount = await  Hotel.countDocuments({type:"cabin"})
      res.status(200).json([
        {type:"hotel",count:hotelCount},
        {type:"apartment",count:apartmentCount},
        {type:"resort",count:resortCount},
        {type:"villa",count:villaCount},
        {type:"cabin",count:cabinCount},
      ])
    }catch (err){
      next(err)
    }
}