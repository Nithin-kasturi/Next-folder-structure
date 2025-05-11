import mongoose from "mongoose";
const connectMongoDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL!);
        console.log("Connected to db")
    } catch (error) {
        console.log(error)
    }
}
export default connectMongoDB;