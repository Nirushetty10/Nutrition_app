import express from "express";

const userRoute = express.Router();

userRoute.use("/" ,(req,res)=> {
    res.send("this is user route")
})

export default userRoute;