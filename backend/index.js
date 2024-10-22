import express  from 'express'

import mongoose from 'mongoose'

const app = express();

const connectionDb = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Zerodha")
        console.log("connect to db");
        
    } catch (error) {
        console.log("not connect to db");
        throw error
        
    }
}
app.get('/hello',(req,res)=>{
    res.send("say Hello")
})
connectionDb().then(()=>{
    app.listen(4000,()=>{
        console.log("Listning port",4000);
        
    })
})