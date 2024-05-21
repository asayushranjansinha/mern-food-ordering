import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

export const validateUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),
    body("addressLine1").isString().notEmpty().withMessage("AddressLine1 must be a string"),
    body("city").isString().notEmpty().withMessage("City must be a string"),
    body("country").isString().notEmpty().withMessage("Country must be a string"),

    handleValidationErrors,
];


export const validateRestaurantRequest = [
    body("restaurantName").isString().notEmpty().withMessage("Restaurant Name is required"),
    body("city").isString().notEmpty().withMessage("City is required"),
    body("country").isString().notEmpty().withMessage("Country is required"),
    body("deliveryPrice").isFloat({ min: 0 }).withMessage("Delivery Price must be positive"),
    body("estimatedDeliveryTime").isFloat({ min: 0 }).withMessage("Estimated Delivery Time must be positive"),
    body("cuisines").isArray().not().isEmpty().withMessage("Cuisines can not be empty"),
    body("menuItems").isArray().withMessage("Menu Can not be Empty"),
    body("menuItems.*.name").notEmpty().withMessage("Menu Item Name is required."),
    body("menuItems.*.price").isFloat({ min: 0 }).withMessage("Menu Item Price is required."),
    handleValidationErrors,
];