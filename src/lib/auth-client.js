import { createAuthClient } from "better-auth/client";
export const { signIn, signUp, signOut, useSession } = createAuthClient();
