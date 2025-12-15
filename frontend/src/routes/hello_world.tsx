import { useQuery } from "@tanstack/react-query";
import trpc from "../trpc";

export default function HelloWorldRoute() {
  const helloWorld = useQuery(trpc.helloWorld.queryOptions());

  return (
    <div>
      <span className="material-symbols-rounded">waving_hand</span>
      {helloWorld.data}
    </div>
  );
}
