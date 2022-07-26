import User from "../models/User.js";
import bcrypt from "bcryptjs"
import { createError } from "../util/err.js";
import jwt from "jsonwebtoken"
export const register =async (req, res,next) => {
    try {
        // using hashing for password bcryptjs
        const salt = bcrypt.genSaltSync(10) 
        const hash = bcrypt.hashSync(req.body.password,salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:hash
        })
        
        await newUser.save()

        res.status(200).json(newUser)
    } catch (err) {
        next(err)
    }
};

export const login = async (req, res, next) => {
  try {
    //using login
      
      const user = await User.findOne({ username: req.body.username })
      
      if (!user) return next(createError(404, "User Not found"));
      
      const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)
      if (!isPasswordCorrect)
          return next(createError(400, "Wrong Credentials"))
      // creating the json web token to pass to cookie
      const token = jwt.sign({
              id:user._id,
            isAdmin:user.isAdmin
      },process.env.JWT_secretKey
      );

      const { password, isAdmin,...otherData } = user._doc
      
    
    res
        .cookie("access_token",token,{
            httpOnly:true
        })
        .status(200).json({...otherData});
  } catch (err) {
    next(err);
  }
};

