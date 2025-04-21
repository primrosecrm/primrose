import { bad, ok } from "../../helpers/responseHelper";
import { Request, Response } from 'express';
import User from "../models/user";
import AuthRepository from "../repositories/auth_repository";
import PasswordService from "./password_service";

export default class AuthService {
    private db: AuthRepository;
    private passwordService: PasswordService;

    constructor(db: AuthRepository, passwordService: PasswordService) {
        this.db = db;
        this.passwordService = passwordService;
    }

    registerUser = async (req: Request, res: Response) => {
        let { email, name, password } = req.body;
    
        let existingUser = await this.db.getUser(email);
        if (existingUser !== null) {
            return bad(res, 'An account with that email address has already been registered.');
        }
    
        let hashedPassword = await this.passwordService.hashString(password);
        let createdUser = await this.db.createUser(email, name, hashedPassword);
        if (createdUser === null) {
            return bad(res, 'Registration failed');
        }

        return ok(res);
    }

    loginUser = async (req: Request, res: Response) => {
        let { email, password } = req.body;
    
        let userRow = await this.db.getUser(email);
        if (userRow === null) {
            return bad(res, 'Invalid or expired login credentials.');
        }
    
        let isPasswordValid = await this.passwordService.checkString(password, userRow.password_hash);
        if (!isPasswordValid) {
            return bad(res, 'Invalid or expired login credentials.');
        }
    
        let account_is_locked = userRow.accountLockedUntil != null && userRow.accountLockedUntil > new Date();
        if (account_is_locked) {
            return bad(res, 'This account has been locked.');
        }
    
        let user = User.fromRow(userRow);

        return ok(res, undefined, { email: user.email, name: user.name });
    }
}