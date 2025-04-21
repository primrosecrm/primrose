import { Request, Response } from 'express';
import User from '../models/user';
import { err, ok } from '../../helpers/responseHelper';
import pool from '../../db/db'
import bcrypt from 'bcrypt';

export const registerUser = async (req: Request, res: Response) => {
    let { email, name, password } = req.body;
    
    let hashedPassword = await bcrypt.hash(password, 10);
    let user = new User(email, name, hashedPassword);

    let query = `
        insert into users (email, name, password_hash)
        values ($1, $2, $3)
    `;

    let result = await pool.query(query, [user.email, user.name, user.password]);
    console.log(result);

    if (result.rowCount === 0) {
        err(res, {}, 'Registration failed');
        return;
    }

    ok(res);
}

export const loginUser = async (req: Request, res: Response) => {
    let { email, password } = req.body;

    let query = `
        select * from users 
        where email = $1
    `;

    let result = await pool.query(query, [email]);
    if (result.rowCount === 0) {
        ok(res, {}, "Invalid or expired login credentials.");
        return;
    }

    if (result.rowCount! > 1) {
        err(res, {}, "the impossible happened!");
        return;
    }

    let row = result.rows[0];
    
    let isPasswordValid = await bcrypt.compare(password, row.password_hash);
    if (!isPasswordValid) {
        err(res, {}, 'Invalid or expired login credentials.');
        return;
    }

    let user = new User(row.email, row.name, row.password_hash);

    ok(res, { user });
}