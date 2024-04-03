import { env } from "../application/config/env";
import "../application/utils/mongooseClient";
import { makeLoginController } from "../factories/controller/AutenticationControllers/makeLoginController";
import { routeAdapter } from "./adapters/routeAdapter";
import app from "./config";
import "./routes";

app.post("/auth/login", routeAdapter(makeLoginController()));

app.listen(env.API_PORT, () =>
  console.log("🔥 Server listening on port " + env.API_PORT)
);
