
import { routeAdapter } from "./adapters/routeAdapter";
import app from "./config";
import { makeCreateUserController } from "../factories/controller/makeCreateUserController";
import { makeDeleteUserController } from "../factories/controller/makeDeleteUserController";
import { makeUpdateUserController } from "../factories/controller/makeUpdateUserController";
import { env } from "../application/config/env";
import "../application/utils/mongooseClient"

app.put("/update", routeAdapter(makeUpdateUserController()))
app.delete("/delete", routeAdapter(makeDeleteUserController()))
app.post("/create", routeAdapter(makeCreateUserController()));

app.listen(env.API_PORT, () =>
  console.log("🔥 Server listening on port " + env.API_PORT)
);
