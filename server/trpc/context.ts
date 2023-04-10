import * as trpc from "@trpc/server";
import { inferAsyncReturnType } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { decodeAndVerifyJwtToken } from "./somewhere/in/your/app/utils";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = async ({
  req,
  res,
}: trpcNext.CreateNextContextOptions) => {
  // Create your context based on the request object
  // Will be available as `ctx` in all your resolvers
  // This is just an example of something you might want to do in your ctx fn
  const getUserFromHeader = async () => {
    if (req.headers.authorization) {
      const user = await decodeAndVerifyJwtToken(
        req.headers.authorization.split(" ")[1]
      );
      return user;
    }
    return null;
  };
  const user = await getUserFromHeader();
  return {
    user,
  };
};
export type Context = inferAsyncReturnType<typeof createContext>;
