import { Webhook } from "svix";
import userModel from "../models/userModel.js";

const clerkWebhooks = async (req, res) => {
  try {
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // req.body is Buffer → convert to string
    const payload = req.body.toString();

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // IMPORTANT: verify returns the event
    const event = wh.verify(payload, headers);

    const { data, type } = event;

    switch (type) {
      case "user.created":
        await userModel.create({
          clerkId: data.id,
          email: data.email_addresses?.[0]?.email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        });
        break;

      case "user.updated":
        await userModel.findOneAndUpdate(
          { clerkId: data.id },
          {
            email: data.email_addresses?.[0]?.email_address,
            firstName: data.first_name,
            lastName: data.last_name,
            photo: data.image_url,
          }
        );
        break;

      case "user.deleted":
        await userModel.findOneAndDelete({ clerkId: data.id });
        break;

      default:
        console.log("Unhandled webhook type:", type);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Webhook Error:", err.message);
    return res.status(400).json({ success: false });
  }
};

export { clerkWebhooks };
