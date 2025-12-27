import mongoose from "mongoose";

const connectDB = async ()=>{
    try{

        mongoose.connection.on('connected',()=>{
        console.log("MongoDB Database connected");
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)

    }catch(err){

        console.error("MongoDB connection failed");
        console.error(err.message);
        
    }
}

export default connectDB;