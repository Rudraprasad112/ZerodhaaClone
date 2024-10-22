//require("dotenv").config();
import {dotenv} from "dotenv";
dotenv.config();
//const mongoose = require("mongoose");
import { mongoose } from "mongoose";
const uri= process.env.Mongo_url;


const Connections = async ()=>{
    try {
        await mongoose.connect(uri);
        
    } catch (error) {
        console.error("connection failed");

        process.exit(0);
    }
}
export default  {Connections}