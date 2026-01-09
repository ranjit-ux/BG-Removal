import express from 'express';
import { clerkWebhook } from '../controllers/UserController.js';

const userRouter = express.Router();

userRouter.post('/webhook',clerkWebhook)

export default userRouter;