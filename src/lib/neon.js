import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../db/schema.js";

const sql = neon(
  "postgresql://dev_owner:npg_7YW5XcLHAdrC@ep-frosty-meadow-a4crm3xt-pooler.us-east-1.aws.neon.tech/dev?sslmode=require"
);
// const sql = neon(process.env.NEON_DATABASE_URL);
export const db = drizzle({ schema, client: sql });
