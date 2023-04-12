import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";

export const helloWorldRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish()
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? "world"}`
      };
    }),
  helloAuthenticated: protectedProcedure
    .input(
      z.object({
        text: z.string().nullish()
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${
          input?.text ?? "world"
        } (server authenticated this request)`
      };
    })
});
