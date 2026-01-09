// import express from "express"
// import cors from "cors"
// import dotenv from "dotenv"
// import connectDB from "./configs/mongodb.js";
// import userRouter from "./routes/userRoutes.js";

// dotenv.config();

// const app=express();

// app.use('/api/user/webhook', userRouter)

// const PORT=process.env.PORT || 3000;

// await connectDB();

// app.use(cors());


// app.use(express.json());

// app.get('/', (req,res)=>{
//     res.send("API Working")
// })

// // app.use('/api/user/webhook', userRouter)


// //APP Listen
// app.listen(PORT, ()=>{
//     console.log(`Server running on Port ${PORT}`);
// })


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/mongodb.js";
import { clerkWebhook } from "./controllers/userController.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

// Webhook MUST come before express.json
app.post(
  "/api/user/webhook",
  express.raw({ type: "application/json" }),
  clerkWebhook
);

app.use(express.json());

app.get("/", async (req, res) => {
  await connectDB();
  res.send("API Working");
});

app.use("/api/user", async (req, res, next) => {
  await connectDB();
  next();
}, userRouter);

export default app;
