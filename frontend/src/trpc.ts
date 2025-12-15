import { QueryClient } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import type { AppRouter } from "prompthub-backend";

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});
export const queryClient = new QueryClient();

const trpc = createTRPCOptionsProxy<AppRouter>({
  client,
  queryClient,
});

export default trpc;
