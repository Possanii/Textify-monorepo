import { env } from "process";
import { routeAdapter } from "./adapters/routeAdapter";
import app from "./config";
import { makeCreateUserController } from "../factories/controller/makeCreateUserController";
import { makeDeleteUserController } from "../factories/controller/makeDeleteUserController";

app.delete("/deletar", routeAdapter(makeDeleteUserController()))
app.post("/cadastro", routeAdapter(makeCreateUserController()));

app.listen(env.API_PORT, () =>
  console.log("🔥 Server listening on port " + env.API_PORT)
);
