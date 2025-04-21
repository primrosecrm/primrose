import { Response } from "express";

export const ok = (res: Response, data: any = {}, message = 'success') => {
    return res.status(200).json({
        message,
        data
    });
}

export const err = (res: Response, data: any = {}, message = 'error') => {
    return res.status(500).json({
        message,
        data
    });
};