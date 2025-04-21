import { Pool } from "pg";

export default class CompanyRepository {
    private db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }


}