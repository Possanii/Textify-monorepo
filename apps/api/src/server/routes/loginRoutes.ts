import { makeLoginController } from "../../factories/controller/AuthenticationControllers/makeLoginController";
import { makeCreateUserController } from "../../factories/controller/UserControllers/makeCreateUserController";
import { routeAdapter } from "../adapters/routeAdapter";
import app from "../config";

app.post("/auth/login", routeAdapter(makeLoginController()));

app.post("/auth/signup", routeAdapter(makeCreateUserController()));
