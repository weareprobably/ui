import { db } from "../lib/neon.js";
import { users, channels, posts, tags, memberOf, authorOf, postedIn, taggedWith } from "./schema.js";

// Seed users
await db.insert(users).values([
  { id: "usr4bq7svl0w1xu", name: "alice", email: "alice@example.com" },
  { id: "usr9k1t5c2h7mre", name: "bob", email: "bob@example.com" },
  { id: "usrz3vn1d6p8yuw", name: "carol", email: "carol@example.com" },
]);

// Seed channels
await db.insert(channels).values([
  { id: "chn5g2k8w1n0jtl", name: "general", description: "General chat" },
  { id: "chnr7d4e3s9v2ua", name: "random", description: "Random topics" },
  { id: "chnm8h2b5w0z6cn", name: "dev", description: "Development" },
]);

// Seed posts
await db.insert(posts).values([
  { id: "pstc9x5u1q3v8zr", name: "Welcome to Acme Corp!" },
  { id: "pstw4y7n6t2b3km", name: "Random thought of the day." },
  { id: "pstl2k3v9q1j6bt", name: "Let's discuss the new API." },
]);

// Seed tags
await db.insert(tags).values([
  { id: "tagn8p4h2y5z1xq", name: "announcement" },
  { id: "tagq0z8c7w1m5sl", name: "discussion" },
  { id: "tagt5e1s4b9m8uk", name: "random" },
]);

await db.insert(memberOf).values([
  { userId: "usr4bq7svl0w1xu", channelId: "chn5g2k8w1n0jtl" },
  { userId: "usr4bq7svl0w1xu", channelId: "chnr7d4e3s9v2ua" },
  { userId: "usr9k1t5c2h7mre", channelId: "chnr7d4e3s9v2ua" },
  { userId: "usr9k1t5c2h7mre", channelId: "chnm8h2b5w0z6cn" },
  { userId: "usrz3vn1d6p8yuw", channelId: "chnm8h2b5w0z6cn" },
]);

await db.insert(authorOf).values([
  { userId: "usr4bq7svl0w1xu", postId: "pstc9x5u1q3v8zr" },
  { userId: "usr9k1t5c2h7mre", postId: "pstw4y7n6t2b3km" },
  { userId: "usr9k1t5c2h7mre", postId: "pstl2k3v9q1j6bt" },
  { userId: "usrz3vn1d6p8yuw", postId: "pstl2k3v9q1j6bt" },
]);

await db.insert(postedIn).values([
  { postId: "pstc9x5u1q3v8zr", channelId: "chn5g2k8w1n0jtl" },
  { postId: "pstw4y7n6t2b3km", channelId: "chnr7d4e3s9v2ua" },
  { postId: "pstl2k3v9q1j6bt", channelId: "chn5g2k8w1n0jtl" },
  { postId: "pstl2k3v9q1j6bt", channelId: "chnm8h2b5w0z6cn" },
]);

await db.insert(taggedWith).values([
  { postId: "pstc9x5u1q3v8zr", tagId: "tagn8p4h2y5z1xq" },
  { postId: "pstw4y7n6t2b3km", tagId: "tagq0z8c7w1m5sl" },
  { postId: "pstw4y7n6t2b3km", tagId: "tagt5e1s4b9m8uk" },
  { postId: "pstl2k3v9q1j6bt", tagId: "tagn8p4h2y5z1xq" },
]);
