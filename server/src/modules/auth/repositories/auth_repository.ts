import { users } from "../../../db/schema";
import { eq, InferSelectModel } from "drizzle-orm";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "../../../db/schema";

type User = InferSelectModel<typeof users>;

export default class AuthRepository {
    private db: NodePgDatabase<typeof schema>;

    constructor(db: NodePgDatabase<typeof schema>) {
        this.db = db;
    }
    
    getUser = async (email: string): Promise<User | null> => {
        const user = await this.db
            .select()
            .from(users)
            .where(eq(users.email, email))
            .limit(1);

        return user[0] ?? null;
    }

    createUser = async (email: string, name: string, passwordHash: string): Promise<User | null> => {    
        await this.db.insert(users).values({
            email: email,
            name: name,
            passwordHash: passwordHash
        });

        return this.getUser(email);
    }
}