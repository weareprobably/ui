import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import db from "../db";
import { posts, authorOf, postedIn } from "../db/schema.js";
import generateId from "../lib/generateId.js";

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
};
