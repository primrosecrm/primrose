import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from "arnica-common"
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool, { schema });

export default db;