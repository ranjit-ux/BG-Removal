import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import serverless from "serverless-http"
import connectDB from "./configs/mongodb.js"
import userRouter from "./routes/userRoutes.js"

dotenv.config()

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use("/api/user/webhook", userRouter)

app.get("/", (req, res) => {
  res.send("API Working")
})

export const handler = serverless(app)
