import {Router} from "express";
import {
    login, 
    register, 
    logout, 
    profile,
    verifyToken,
} from "../controllers/authController.js";
import {authRequired} from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { registerSchema, loginSchema } from "../schemas/authSchema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/verify", verifyToken);

router.get("/profile", authRequired, profile);

export default router