import { pgTable, text, timestamp, primaryKey, unique, integer, foreignKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Users
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  channels: many(memberOf),
  posts: many(authorOf),
}));

// Channels
export const channels = pgTable("channels", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const channelsRelations = relations(channels, ({ many }) => ({
  members: many(memberOf),
  posts: many(postedIn),
}));

// Posts
export const posts = pgTable("posts", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const postsRelations = relations(posts, ({ many }) => ({
  channels: many(postedIn),
  authors: many(authorOf),
  tags: many(taggedWith),
}));

// Tags
export const tags = pgTable("tags", {
  id: text("id").primaryKey(),
  name: text("name").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const tagsRelations = relations(tags, ({ many }) => ({
  posts: many(taggedWith),
}));

// Users < members of > Channels
export const memberOf = pgTable(
  "member_of",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    channelId: text("channel_id")
      .notNull()
      .references(() => channels.id),
  },
  (table) => [primaryKey({ columns: [table.userId, table.channelId] })]
);

export const memberOfRelations = relations(memberOf, ({ one }) => ({
  user: one(users, {
    fields: [memberOf.userId],
    references: [users.id],
  }),
  channel: one(channels, {
    fields: [memberOf.channelId],
    references: [channels.id],
  }),
}));

// Users < authors of > Posts
export const authorOf = pgTable(
  "author_of",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    postId: text("post_id")
      .notNull()
      .references(() => posts.id),
  },
  (table) => [primaryKey({ columns: [table.userId, table.postId] })]
);

export const authorOfRelationships = relations(authorOf, ({ one }) => ({
  post: one(posts, {
    fields: [authorOf.postId],
    references: [posts.id],
  }),
  user: one(users, {
    fields: [authorOf.userId],
    references: [users.id],
  }),
}));

// Posts < posted in > Channels
export const postedIn = pgTable(
  "posted_in",
  {
    postId: text("post_id")
      .notNull()
      .references(() => posts.id),
    channelId: text("channel_id")
      .notNull()
      .references(() => channels.id),
  },
  (table) => [primaryKey({ columns: [table.postId, table.channelId] })]
);

export const postedInRelationships = relations(postedIn, ({ one }) => ({
  post: one(posts, {
    fields: [postedIn.postId],
    references: [posts.id],
  }),
  channel: one(channels, {
    fields: [postedIn.channelId],
    references: [channels.id],
  }),
}));

// Posts < tagged with > Tags
export const taggedWith = pgTable(
  "tagged_with",
  {
    postId: text("post_id")
      .notNull()
      .references(() => posts.id),
    tagId: text("tag_id")
      .notNull()
      .references(() => tags.id),
  },
  (table) => [primaryKey({ columns: [table.postId, table.tagId] })]
);

export const taggedWithRelations = relations(taggedWith, ({ one }) => ({
  post: one(posts, {
    fields: [taggedWith.postId],
    references: [posts.id],
  }),
  tag: one(tags, {
    fields: [taggedWith.tagId],
    references: [tags.id],
  }),
}));
