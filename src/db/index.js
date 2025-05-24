import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

console.log(import.meta.env.NEON_DATABASE_URL);

const sql = neon(import.meta.env.NEON_DATABASE_URL);
const db = drizzle({ schema, client: sql });

export default db;
