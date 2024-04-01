import { env } from "process";
import { makeHelloWorldController } from "../factories/controller/makeHelloWorldController";
import { routeAdapter } from "./adapters/routeAdapter";
import app from "./config";

app.get("/", routeAdapter(makeHelloWorldController()));

app.listen(env.API_PORT, () =>
  console.log("🔥 Server listening on port " + env.API_PORT)
);
