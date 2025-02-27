import dotenv from "dotenv"
import express from "express";
import connectDb from "./utils/db.js"
dotenv.config({})


const app = express();
connectDb();
const port = process.env.PORT || 8000;

app.listen(port,()=>{
   
    console.log("Server is running at 3000");
})

