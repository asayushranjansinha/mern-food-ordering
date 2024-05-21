import { Request, Response } from "express"
import User from "../models/user.model";

const registerUser = async (req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body;
        const existingUser = await User.findOne({ auth0Id });
        if (existingUser) {
            return res.status(200).send();
        }

        const newUser = new User(req.body);
        await newUser.save();

        return res.status(201).json({ message: "User Created", user: newUser.toObject() })
    } catch (error) {
        console.log("User Registration FAILED!! ", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const { name, addressLine1, country, city } = req.body;
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.name = name;
        user.addressLine1 = addressLine1,
            user.city = city;
        user.country = country;


        await user.save();
        return res.status(200).json({ message: "Update Successful", user });
    } catch (error) {
        console.log("Error updating user: ", error);
        return res.status(500).json({ message: "Internal server Error" });
    }
}

const getUserInfo = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.userId).select("-auth0Id");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.json(user);

    } catch (error) {
        console.log("Error getting user info: ", error);
        return res.status(500).json({ message: "Internal server Error" });
    }
}

export { registerUser, updateUser, getUserInfo }