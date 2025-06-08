import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  // dbCredentials: {
  //   host: process.env.PG_HOST || "",
  //   port: Number(process.env.PG_PORT),
  //   password: process.env.PG_PASSWORD,
  //   user: process.env.PG_USER,
  //   database: process.env.PG_DATABASE || "",
  //   ssl: false
  // }
});