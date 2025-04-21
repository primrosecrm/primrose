import { Router, Request, Response, NextFunction } from "express";
import { loginUserValidation, registerUserValidation } from "../middleware/validate_auth";
import { validationResult } from "express-validator";
import AuthRepository from "../repositories/auth_repository";
import AuthService from "../services/auth_service";
import AuthController from "../controllers/auth_controller";
import pool from "../../../db/database";

const router = Router();

const authRepository = new AuthRepository(pool);
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

router.post(
    '/registerUser', 
    registerUserValidation, 
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(500).json({ errors: errors.array() });
            return;
        }

        next();
    }, 
    authController.registerUser
);

router.post(
    '/loginUser',
    loginUserValidation,
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(500).json({ errors: errors.array() });
            return;
        }

        next();
    },
    authController.loginUser
);

export default router;