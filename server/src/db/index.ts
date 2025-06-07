import { drizzle } from 'drizzle-orm/node-postgres';
import pool from './db';
import * as schema from "arnica-common"

const db = drizzle(pool, { schema });

export default db;