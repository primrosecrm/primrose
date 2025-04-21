import { Response } from "express";

export const ok = (res: Response, message = 'Success', data: any = {}): void => {
    res.status(200).json({
        message,
        data
    });
}

export const bad = (res: Response, message = 'Bad request', data: any = {}): void => {
    res.status(400).json({
        message,
        data
    });
};

export const err = (res: Response, message = 'Internal server error', data: any = {}): void => {
    res.status(500).json({
        message,
        data
    });
};