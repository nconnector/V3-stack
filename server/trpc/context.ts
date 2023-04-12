import type { H3Event } from "h3";
import { inferAsyncReturnType } from "@trpc/server";
import { prisma } from "~/server/prisma";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = (_event: H3Event) => {
  // Create your context based on the request object
  // Will be available as `ctx` in all your resolvers
  // This is just an example of something you might want to do in your ctx fn
  return {
    prisma,
    session: _event.context.session
  };
};
export type Context = inferAsyncReturnType<typeof createContext>;
