import express  from 'express'

import mongoose from 'mongoose'

const app = express();
import  Routes  from './Routers.js'
import cors from "cors"
import bodyParser from "body-parser";
const port = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(cors());
app.use("/entry",Routes);
const connectionDb = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Zerodha")
        console.log("connect to db");
        
    } catch (error) {
        console.log("not connect to db");
        throw error
        
    }
}

connectionDb().then(()=>{
    app.listen(8080,()=>{
        console.log("Listning port",8080);
        
    })
})