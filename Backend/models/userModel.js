import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        clerkId: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true, lowercase:true },
        photo: { type: String, default:"" },
        firstName: { type: String },
        lastName: { type: String },
        creditBalance: { type: Number, default: 1 , min:0},
    }
);

const UserModel = mongoose.models.user || mongoose.model("User", userSchema);

export default UserModel;
