import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export async function connectDB(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log('MONGODB CONNECTED SUCCESSFULLY',connectionInstance.connection.host)
    } catch (error) {
        console.log("ERROR OCURRED WHILE CONNECTING MONGODB",error);
        process.exit(1)
    }
}