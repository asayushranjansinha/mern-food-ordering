import express from 'express'
import { createRestaurant, getRestaurantInfo, updateRestaurantInfo } from '../controllers/restaurant.controller';
import multer from 'multer';
import { jwtCheck, jwtParse } from '../middlewares/auth.middleware';
import { validateRestaurantRequest } from '../middlewares/validation.middleware';


const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5mb
    }
});

router.get("/", jwtCheck, jwtParse, getRestaurantInfo);

router.post("/",
    upload.single("imageFile"),
    jwtCheck,
    jwtParse,
    validateRestaurantRequest,
    createRestaurant);
router.put("/",
    upload.single("imageFile"),
    jwtCheck,
    jwtParse,
    validateRestaurantRequest,
    updateRestaurantInfo);



export default router;