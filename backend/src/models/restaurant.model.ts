import mongoose, { Document, Schema } from 'mongoose';

// Interface for MenuItems
interface MenuItem {
    name: string;
    price: number;
}

const menuItemsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
});


// Interface for Restaurant
interface Restaurant extends Document {
    owner: mongoose.Types.ObjectId;
    restaurantName: string;
    city: string;
    country: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    cuisines: string[];
    menuItems: MenuItem[];
    imageUrl: string;
    lastUpdated: Date;
  }
const restaurantSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    restaurantName: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    deliveryPrice: { type: Number, required: true },
    estimatedDeliveryTime: { type: Number, required: true },
    cuisines: [{ type: String, required: true }],
    menuItems: [menuItemsSchema],
    imageUrl: { type: String, required: true },
    lastUpdated: { type: Date, required: true },
});

const Restaurant = mongoose.model<Restaurant>("Restaurant", restaurantSchema);
export default Restaurant;