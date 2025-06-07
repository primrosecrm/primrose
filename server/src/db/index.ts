import { drizzle } from 'drizzle-orm/node-postgres';
import pool from './db';
import * as schema from './schema';

const db = drizzle(pool, { schema });

export default db;