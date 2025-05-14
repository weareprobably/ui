import { defineDb, defineTable, column } from "astro:db";

const Organization = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
  },
});

const Channel = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
  },
});

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
  },
});

const Post = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
  },
});

const Tag = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
  },
});

const OrganizationToChannel = defineTable({
  columns: {
    organizationId: column.text({ references: () => Organization.columns.id }),
    channelId: column.text({ references: () => Channel.columns.id }),
  },
});

const OrganizationToUser = defineTable({
  columns: {
    organizationId: column.text({ references: () => Organization.columns.id }),
    userId: column.text({ references: () => User.columns.id }),
  },
});

const ChannelToPost = defineTable({
  columns: {
    channelId: column.text({ references: () => Channel.columns.id }),
    postId: column.text({ references: () => Post.columns.id }),
  },
});

const ChannelToUser = defineTable({
  columns: {
    channelId: column.text({ references: () => Channel.columns.id }),
    userId: column.text({ references: () => User.columns.id }),
  },
});

const UserToPost = defineTable({
  columns: {
    userId: column.text({ references: () => User.columns.id }),
    postId: column.text({ references: () => Post.columns.id }),
  },
});

const PostToTag = defineTable({
  columns: {
    tagId: column.text({ references: () => Tag.columns.id }),
    postId: column.text({ references: () => Post.columns.id }),
  },
});

export default defineDb({
  tables: {
    Organization,
    User,
    Channel,
    Post,
    Tag,
    OrganizationToChannel,
    OrganizationToUser,
    ChannelToPost,
    ChannelToUser,
    UserToPost,
    PostToTag,
  },
});
