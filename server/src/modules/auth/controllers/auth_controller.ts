import { Request, Response } from 'express';
import { err } from '../../helpers/responseHelper';
import AuthService from '../services/auth_service';

export default class AuthController {
    private authService: AuthService;
    
    constructor(authService: AuthService) {
        this.authService = authService;
    }

    registerUser = async (req: Request, res: Response): Promise<void> => {
        try {
            return this.authService.registerUser(req, res);
        } catch (error) {
            return err(res, undefined, error);
        }
    }

    loginUser = async (req: Request, res: Response) => {
        try {
            return this.authService.loginUser(req, res);
        } catch (error) {
            return err(res, undefined, error);
        }
    }
}