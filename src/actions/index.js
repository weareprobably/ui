import { defineAction } from "astro:actions";
import { z } from "astro:schema";

import getDatabase from "../db/index";

export const server = {
  getGreeting: defineAction({
    input: z.object({
      name: z.string(),
    }),
    handler: async (input) => {
      return `Hello, ${input.name}!`;
    },
  }),
  query: defineAction({
    handler: async () => {
      const db = await getDatabase();
      console.log("db", db);
      const projects = await db.query.project.findMany({
        with: {
          tasks: true,
        },
      });
      return projects;
    },
  }),
};
