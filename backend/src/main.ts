import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import { loadEnvFile } from "node:process";
import { appRouter } from "./routers/_app.ts";

loadEnvFile();

createHTTPServer({
  middleware: cors({
    origin: "http://localhost:5173",
  }),
  router: appRouter,
}).listen(3000);
