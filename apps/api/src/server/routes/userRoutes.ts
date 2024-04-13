import { makeDeleteUserController } from "../../factories/controller/UserControllers/makeDeleteUserController";
import { makeGetAllUsersController } from "../../factories/controller/UserControllers/makeGetAllUsersController";
import { makeGetUserController } from "../../factories/controller/UserControllers/makeGetUserController";
import { makeUpdateUserController } from "../../factories/controller/UserControllers/makeUpdateUserController";
import { makeAuthenticationMiddleware } from "../../factories/middleware/makeAuthenticationMiddleware";
import { middlewareAdapter } from "../adapters/middlewareAdapter";
import { routeAdapter } from "../adapters/routeAdapter";
import app from "../config";

app.get(
  "/user",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeGetUserController()),
);

app.get(
  "/user/all",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeGetAllUsersController()),
);

app.put(
  "/user/update",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeUpdateUserController()),
);

app.delete(
  "/user/delete",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeDeleteUserController()),
);
