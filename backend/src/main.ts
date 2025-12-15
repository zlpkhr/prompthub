import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import { appRouter } from "./routers/_app.ts";

createHTTPServer({
  middleware: cors({
    origin: "http://localhost:5173",
  }),
  router: appRouter,
}).listen(3000);
