import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import trpc from "./trpc";

createRoot(document.getElementById("root")!).render(
  <StrictMode>Hello, World!</StrictMode>,
);

void trpc.helloWorld.query().then(console.log);
