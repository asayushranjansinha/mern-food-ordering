import express from 'express'
import { getUserInfo, registerUser, updateUser } from '../controllers/user.controller';
import { jwtCheck, jwtParse } from '../middlewares/auth.middleware';
import { validateUserRequest } from '../middlewares/validation.middleware';

const router = express.Router();

router.get("/",jwtCheck,jwtParse,getUserInfo);
router.post("/", jwtCheck, registerUser);
router.put("/", jwtCheck, jwtParse, validateUserRequest, updateUser);
export default router;