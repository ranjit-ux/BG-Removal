import { Webhook } from "svix";
import UserModel from "../models/userModel.js";

const clerkWebhook = async (req,res) => {
  try{

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body),{
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"]
    })

    const {data,type} = req.body
    switch(type){
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        }

        await UserModel.create(userData);
        res.json({})

        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        }

        await UserModel.findOneAndUpdate({clerkId:data.id},userData);
        res.json({});

        break;
      }

      case "user.deleted": {
        await UserModel.findOneAndDelete({clerkId:data.id})
        res.json({});

        break;
      }
    }


  }catch(err){
    console.log("svix verification failed", err.message);
    res.json({success:false,message:err.message});
  }
}

export {clerkWebhook}