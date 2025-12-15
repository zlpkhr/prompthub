import { t } from "../trpc.ts";

export const appRouter = t.router({
  helloWorld: t.procedure.query(() => {
    return "Hello, World!";
  }),
});
