import { makeCreateUserController } from "../../factories/controller/makeCreateUserController";
import { makeDeleteUserController } from "../../factories/controller/makeDeleteUserController";
import { makeUpdateUserController } from "../../factories/controller/makeUpdateUserController";
import { routeAdapter } from "../adapters/routeAdapter";
import app from "../config";

app.put("/update", routeAdapter(makeUpdateUserController()));

app.delete("/delete", routeAdapter(makeDeleteUserController()));

app.post("/create", routeAdapter(makeCreateUserController()));
