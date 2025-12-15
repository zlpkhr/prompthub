import { Route, Switch } from "wouter";
import HelloWorldRoute from "./routes/hello_world";

export default function Router() {
  return (
    <Switch>
      <Route path="/" component={HelloWorldRoute} />
    </Switch>
  );
}
