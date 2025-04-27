import { Pool } from "pg";
import Contact from "../models/contact";

export default class ContactRepository {
    private db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }

    createContact = async (model: Contact): Promise<Contact | null> => {
        let result = await this.db.query(
            `insert into contacts (
                user_id, first_name, last_name, preferred_contact_method, email, phone, notes, is_archived) 
            values (
                $1, $2, $3, $4, $5, $6, $7, $8
            )`, 
            []
        );
        if (result.rowCount === 0) return null;

        return Contact.fromRow(result.rows[0]);
    }

    getContacts = async (): Promise<Contact[] | null> => {
        let result = await this.db.query(
            `select * from contacts where user_id = $1`, []
        );
        if (result.rowCount === 0) return null;

        return result.rows.map(x => Contact.fromRow(x));
    }
}