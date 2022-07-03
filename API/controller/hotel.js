
import Hotel from "../models/Hotels.js";

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
    const hotel = new Hotel.findById(req.params.id);
    res.status(200).json(hotel);
    console.log("Entry was found" + id);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getHotels = async (req, res) => {
  try {
    const hotel = new Hotel.find();
    res.status(200).json(hotel);
    console.log("Entry was found");
  } catch (err) {
    res.status(500).json(err);
  }
};