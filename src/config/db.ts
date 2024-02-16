import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.DB_URI,)
            console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }

    const dbConnection = mongoose.connection;

   
    dbConnection.on("error", (err) => {
        console.error(`Connection error: ${err}`);
    });
}
export default connectDB