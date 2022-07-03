import express from "express"

const router = express.Router() 

router.get("/", (req, res) => {
    res.send("Hello , This is the end point ")
})

router.get("/register", (req, res) => {
    res.send("Hello , This is registration end point")
})

export default router