import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 12);

const prefixes = {
  user: "usr",
  post: "pst",
  channel: "chn",
  tag: "tag",
};

const generateId = (type) => {
  const prefix = prefixes[type] || "unk";
  const id = nanoid();
  return `${prefix}${id}`;
};

export default generateId;
