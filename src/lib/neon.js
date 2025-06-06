import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../db/schema.js";

const sql = neon(process.env.NEON_DATABASE_URL);
export const db = drizzle({ schema, client: sql });
