import { Pool } from "pg";

export default class ContactRepository {
    private db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }

    createContact = async () => {
        
    }
}