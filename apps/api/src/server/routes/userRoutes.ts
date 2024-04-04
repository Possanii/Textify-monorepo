import { makeCreateUserController } from "../../factories/controller/makeCreateUserController";
import { makeDeleteUserController } from "../../factories/controller/makeDeleteUserController";
import { makeUpdateUserController } from "../../factories/controller/makeUpdateUserController";
import { makeAuthenticationMiddleware } from "../../factories/middleware/makeAuthenticationMiddleware";
import { middlewareAdapter } from "../adapters/middlewareAdapter";
import { routeAdapter } from "../adapters/routeAdapter";
import app from "../config";

app.put(
  "/update",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeUpdateUserController())
);

app.delete(
  "/delete",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeDeleteUserController())
);

app.post("/create", routeAdapter(makeCreateUserController()));
