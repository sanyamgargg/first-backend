import mongoose from "mongoose";
import { DB_NAME } from "../contacts.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)

        console.log(`\n MonogDB connected !! DB HOST: 
        ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MongoDB Connection Error",error) ;
        process.exit(1)
    }
}

export default connectDB