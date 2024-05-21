import mongoose, { Document } from "mongoose";
interface User extends Document {
    _id: mongoose.Schema.Types.ObjectId;
    auth0Id: string;
    email: string;
    name?: string;
    addressLine1?: string;
    city?: string;
    country?: string;
}
const userSchema = new mongoose.Schema({
    auth0Id: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String },
    addressLine1: { type: String },
    city: { type: String },
    country: { type: String },
});

const User = mongoose.model<User>("User", userSchema);
export default User;