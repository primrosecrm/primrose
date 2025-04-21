import { Router, Request, Response, NextFunction } from "express";
import { loginUser, registerUser } from "../controllers/auth_controller";
import { registerUserValidation } from "../middleware/validate_register_user";
import { validationResult } from "express-validator";

const router = Router();

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
    registerUser
);

router.post(
    '/loginUser',
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(500).json({ errors: errors.array() });
            return;
        }

        next();
    },
    loginUser
);

export default router;
