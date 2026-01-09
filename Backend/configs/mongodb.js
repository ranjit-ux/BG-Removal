import mongoose from "mongoose";

let isConnected = false;

const connectDB = async ()=>{
    try{

        if(isConnected) return;

        const db = await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`,{
            bufferCommands: false,
        });

        isConnected=true;
        console.log("MongoDB connected:", db.connection.host);


    }catch(err){

        console.error("MongoDB connection failed",err.message);
        throw err;        
    }
}

export default connectDB;