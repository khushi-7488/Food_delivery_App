import mongoose from "mongoose";
import "dotenv/config"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI).then(() =>
            console.log("DB connected")
        )
    } catch (error) {
        console.log("failed to connect with database", error);                       
    }
}