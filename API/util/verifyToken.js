import jwt from "jsonwebtoken"

import {createError} from "./err.js";

export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token) next(createError(401,"You are not authenticated"))

    jwt.verify(token,process.env.JWT_secretKey, (err,user) => {
        if(err) next(createError(403,"Token Invalid"))
        req.user = user
        next()
    })

}

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,() => {

        if(req.user.id === req.params.id || req.user.isAdmin ){
            next();
        }else{

            return next(createError(403,"You are not Authorized"))
        }

    }
    )
}

export const verifyAdmin = (req,res,next)=>{

    verifyToken(req,res , () => {
        if(req.user.id === req.params.id && req.user.isAdmin){
            next()
        }else{
            return next(createError(403,"You are not Authorized Admin "))
        }
    })
}

