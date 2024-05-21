import { Request, Response } from "express";
import Restaurant from "../models/restaurant.model";
import mongoose from "mongoose";
import { uploadToCloudinary } from "../utils/utils";

const createRestaurant = async (req: Request, res: Response) => {
    try {
        const existingRestaurant = await Restaurant.find({ owner: req.userId });
        if (existingRestaurant.length > 0) {
            return res.status(409).json({ message: "User's Restaurant already exists" });
        }

        const uploadResponse = await uploadToCloudinary(req.file as Express.Multer.File);
        if (!uploadResponse) {
            return res.status(500).json({ message: "Internal Server Error" });
        }

        const restaurant = new Restaurant(req.body);
        restaurant.imageUrl = uploadResponse;
        restaurant.owner = new mongoose.Types.ObjectId(req.userId);
        restaurant.lastUpdated = new Date();
        await restaurant.save();
        return res.status(201).send(restaurant);

    } catch (error) {
        console.log("FAILED to create restaurant!! ", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const getRestaurantInfo = async (req: Request, res: Response) => {
    try {
        const restaurant = await Restaurant.findOne({ owner: req.userId });
        if (!restaurant) {
            return res.status(404).json({ message: "No Restaurant found" });
        }

        res.json(restaurant);
    } catch (error) {
        console.log("Error getting restaurant info: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateRestaurantInfo = async (req: Request, res: Response) => {
    try {
        const restaurant = await Restaurant.findOne({
            owner: req.userId
        });
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }

        restaurant.restaurantName = req.body.restaurantName;
        restaurant.city = req.body.city;
        restaurant.country = req.body.country;
        restaurant.deliveryPrice = req.body.deliveryPrice;
        restaurant.estimatedDeliveryTime = req.body.estimatedDeliveryTime;
        restaurant.cuisines = req.body.cuisines;
        restaurant.menuItems = req.body.menuItems;
        restaurant.lastUpdated = new Date();

        if (req.file) {
            const imageUrl = await uploadToCloudinary(req.file as Express.Multer.File);
            if(!imageUrl){
                return res.status(500).json({message:"Internal Server Error"});
            }
            restaurant.imageUrl = imageUrl;
        }

        await restaurant.save();
        return res.status(200).json(restaurant);

    } catch (error) {
        console.log("Error updating restaurant: ", error);
        res.status(500).json({ message: "Intenal Server Error" });
    }
}

export { createRestaurant, getRestaurantInfo,updateRestaurantInfo }

