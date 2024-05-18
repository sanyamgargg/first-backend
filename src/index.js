// require('dotenv').config()
import dotenv from "dotenv" ;

import mongoose from "mongoose";
import { DB_NAME } from "./contacts.js";
import connectDB from "./db/index.js";



dotenv.config({
    path: "./env"
})

connectDB() ;












/* import express from "express" ;
const app = express() ;


( async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERR: ",error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${
                process.env.PORT
            }`)
        })
    } catch (error) {
        console.error("ERROR: ",error)
        throw err
    }
})() */