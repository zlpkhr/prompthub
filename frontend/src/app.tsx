import { useQuery } from "@tanstack/react-query";
import trpc from "./trpc";

export default function App() {
  const helloWorld = useQuery(trpc.helloWorld.queryOptions());

  return helloWorld.data;
}
