import { Webhook } from "svix";
import UserModel from "../models/userModel.js";
import connectDB from "../configs/mongodb.js";

const clerkWebhook = async (req, res) => {
  try {
    await connectDB();

    // Vercel gives Buffer → convert to string
    const payload = req.body.toString();

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const event = wh.verify(payload, headers);

    const { type, data } = event;

    if (type === "user.created") {
      await UserModel.create({
        clerkId: data.id,
        email: data.email_addresses[0].email_address,
        firstName: data.first_name,
        lastName: data.last_name,
        photo: data.image_url,
      });
    }

    if (type === "user.updated") {
      await UserModel.findOneAndUpdate(
        { clerkId: data.id },
        {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        }
      );
    }

    if (type === "user.deleted") {
      await UserModel.findOneAndDelete({ clerkId: data.id });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return res.status(400).json({ success: false, message: err.message });
  }
};

export { clerkWebhook };
