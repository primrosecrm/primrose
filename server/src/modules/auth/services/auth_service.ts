import { bad, ok } from "../../helpers/responseHelper";
import { Request, Response } from 'express';
import AuthRepository from "../repositories/auth_repository";
import PasswordService from "./password_service";

export default class AuthService {
    private authRepository: AuthRepository;
    private passwordService: PasswordService;

    constructor(authRepository: AuthRepository, passwordService: PasswordService) {
        this.authRepository = authRepository;
        this.passwordService = passwordService;
    }

    registerUser = async (req: Request, res: Response) => {
        let { email, name, password } = req.body;
    
        let existingUser = await this.authRepository.getUser(email);
        if (existingUser !== null) {
            return bad(res, 'An account with that email address has already been registered.');
        }
    
        let hashedPassword = await this.passwordService.hashString(password);
        let createdUser = await this.authRepository.createUser(email, name, hashedPassword);
        if (createdUser === null) {
            return bad(res, 'Registration failed');
        }

        return ok(res);
    }

    loginUser = async (req: Request, res: Response) => {
        let { email, password } = req.body;
    
        let user = await this.authRepository.getUser(email);
        if (user === null) {
            return bad(res, 'Invalid or expired login credentials.');
        }
    
        let isPasswordValid = await this.passwordService.checkString(password, user.passwordHash);
        if (!isPasswordValid) {
            return bad(res, 'Invalid or expired login credentials.');
        }
    
        let account_is_locked = user.accountLockedUntil != null && user.accountLockedUntil > new Date();
        if (account_is_locked) {
            return bad(res, 'This account has been locked.');
        }
    
        return ok(res, undefined, { email: user.email, name: user.name });
    }
}