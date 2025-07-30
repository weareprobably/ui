import { auth } from "../../../lib/auth";

export const ALL = async (ctx) => {
  return auth.handler(ctx.request);
};
