import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./routers/_app.ts";

createHTTPServer({
  router: appRouter,
}).listen(3000);
