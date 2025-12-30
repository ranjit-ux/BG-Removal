import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connect } from "mongoose";
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";

//App Config
dotenv.config();
const app=express();
const PORT=process.env.PORT || 4000;
await connectDB();

//Initialize Middlewares
app.use(express.json());
app.use(cors());

//API Routes
app.get('/', (req,res)=>{
    res.send("API Working")
})

app.use('/api/user',userRouter);

//APP Listen
app.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`);
})