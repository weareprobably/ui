import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import db from "../db";
import { posts, authorOf, postedIn } from "../db/schema.js";
import generateId from "../lib/generateId.js";
import Airtable from "airtable";

export const server = {
  getGreeting: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      channelId: z.string(),
      authorId: z.string(),
    }),
    handler: async (input) => {
      console.log(input);
      const postId = generateId("post");
      const newPost = {
        id: postId,
        name: input.name,
      };
      await db.insert(posts).values(newPost);
      await db.insert(authorOf).values({ postId: postId, userId: input.authorId });
      await db.insert(postedIn).values({ postId: postId, channelId: input.channelId });
      return true;
    },
  }),
  signUp: defineAction({
    accept: "form",
    input: z.object({
      email: z.string(),
      subscribe: z.boolean(),
    }),
    handler: async (input) => {
      var base = new Airtable({ apiKey: import.meta.env.AIRTABLE_KEY }).base("appHiscTVrOzRAG7x");

      base("Signups").create([
        {
          fields: {
            fldEN63o9N1knNdCr: "foo@bar.com",
            fldWSCWOu8Qqd28rq: true,
          },
        },
      ]);

      return true;
    },
  }),
};
