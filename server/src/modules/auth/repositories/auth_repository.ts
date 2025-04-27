import { Pool } from "pg";
import User from "../models/user";

export default class AuthRepository {
    private db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }
    
    getUser = async (email: String): Promise<User | null> => {
        let result = await this.db.query(
            `select * from users where email = $1`, [email]
        );

        if (result.rowCount === 0) return null;
        return result.rows.map(User.fromRow)[0];
    }

    createUser = async (email: String, name: String, password_hash: String): Promise<User | null> => {    
        await this.db.query(
            `insert into users (email, name, password_hash)
            values ($1, $2, $3)`, 
            [email, name, password_hash]
        );

        return this.getUser(email);
    }
}