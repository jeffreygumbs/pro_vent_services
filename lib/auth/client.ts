import { createAuthClient } from "better-auth/react";

const baseURL =
  typeof window !== "undefined"
    ? window.location.origin
    : process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:4201";

export const authClient = createAuthClient({
  baseURL,
  basePath: "/api/auth",
});
