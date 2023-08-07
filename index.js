import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoute from "./routes/user.js";
const app = express();

// mongodb connection

const connect = async ()=> {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/myapp');
      
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("connected" , ()=> {
    console.log("connected to mongodb");
})

app.use("/auth" , userRoute)

app.listen(4000 , ()=> {
    connect();
    console.log("connected to backend server");
})