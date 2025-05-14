import {
  db,
  Organization,
  Channel,
  User,
  Post,
  Tag,
  OrganizationToChannel,
  OrganizationToUser,
  ChannelToPost,
  ChannelToUser,
  UserToPost,
  PostToTag,
} from "astro:db";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 12);

export default async function () {
  await db.insert(Organization).values([
    {
      id: "orguzvg67l2lbay",
      name: "Probably",
    },
    {
      id: "orgptaxog1s7dhf",
      name: "Standard Issue",
    },
  ]);

  await db.insert(Channel).values([
    {
      id: "cha2ld8g4y0ge56",
      name: "All Hands",
    },
    {
      id: "chaij7hr9li4ha3",
      name: "Product",
    },
  ]);

  await db.insert(User).values([
    {
      id: "usr5dtm40i42iqi",
      name: "Elmo",
    },
    {
      id: "usrqgohmxiltbdt",
      name: "Abby",
    },
  ]);

  await db.insert(Post).values([
    {
      id: "psttiw6zeb06ih8",
      name: "Look, nobody likes process",
    },
    {
      id: "pst6cmqsk2qqxgz",
      name: "Going from clusterball to playing positions",
    },
  ]);

  await db.insert(Tag).values([
    {
      id: "tagfyxm3rp6auhz",
      name: "Communication",
    },
    {
      id: "tagy8j9w58v4orh",
      name: "Management",
    },
  ]);

  await db.insert(OrganizationToChannel).values([
    {
      organizationId: "orguzvg67l2lbay",
      channelId: "cha2ld8g4y0ge56",
    },
    {
      organizationId: "orguzvg67l2lbay",
      channelId: "chaij7hr9li4ha3",
    },
  ]);

  await db.insert(OrganizationToUser).values([
    {
      organizationId: "orguzvg67l2lbay",
      userId: "usr5dtm40i42iqi",
    },
    {
      organizationId: "orguzvg67l2lbay",
      userId: "usrqgohmxiltbdt",
    },
  ]);

  await db.insert(ChannelToPost).values([
    {
      channelId: "cha2ld8g4y0ge56",
      postId: "pst6cmqsk2qqxgz",
    },
    {
      channelId: "chaij7hr9li4ha3",
      postId: "psttiw6zeb06ih8",
    },
  ]);

  await db.insert(ChannelToUser).values([
    {
      channelId: "cha2ld8g4y0ge56",
      userId: "usr5dtm40i42iqi",
    },
    {
      channelId: "cha2ld8g4y0ge56",
      userId: "usrqgohmxiltbdt",
    },
    {
      channelId: "chaij7hr9li4ha3",
      userId: "usr5dtm40i42iqi",
    },
  ]);

  await db.insert(UserToPost).values([
    {
      userId: "usr5dtm40i42iqi",
      postId: "psttiw6zeb06ih8",
    },
    {
      userId: "usrqgohmxiltbdt",
      postId: "pst6cmqsk2qqxgz",
    },
  ]);

  await db.insert(PostToTag).values([
    {
      postId: "pst6cmqsk2qqxgz",
      tagId: "tagfyxm3rp6auhz",
    },
  ]);
}
