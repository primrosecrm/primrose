import { Router, Request, Response, NextFunction } from "express";
import { loginUserValidation, registerUserValidation } from "../middleware/validate_auth";
import { validationResult } from "express-validator";
import AuthRepository from "../repositories/auth_repository";
import AuthService from "../services/auth_service";
import AuthController from "../controllers/auth_controller";
import { err } from "../../helpers/responseHelper";
import PasswordService from "../services/password_service";
import db from "../../../db";

const router = Router();

const authRepository = new AuthRepository(db);
const passwordService = new PasswordService();
const authService = new AuthService(authRepository, passwordService);
const authController = new AuthController(authService);

router.post(
    '/registerUser', 
    registerUserValidation, 
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return err(res, '', errors.array());

        next();
    }, 
    authController.registerUser
);

router.post(
    '/loginUser',
    loginUserValidation,
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return err(res, '', errors.array());

        next();
    },
    authController.loginUser
);

export default router;