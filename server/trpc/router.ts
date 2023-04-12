import { router } from "./trpc";
import { userRouter } from "./routers/user";
import { helloWorldRouter } from "./routers/helloWorld";

export const appRouter = router({
  user: userRouter,
  helloWorld: helloWorldRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
