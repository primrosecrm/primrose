import { body } from 'express-validator'

export const registerUserValidation = [
    body('email').isEmail(),
    body('name').isLength({ min: 3}),
    body('password').isLength({ min: 8 })
];

export const loginUserValidation = [
    body('email').isEmail(),
    body('password').isLength({ min: 8 })
];