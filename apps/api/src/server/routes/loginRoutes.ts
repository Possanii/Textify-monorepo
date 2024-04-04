import { makeLoginController } from "../../factories/controller/AutenticationControllers/makeLoginController";
import { routeAdapter } from "../adapters/routeAdapter";
import app from "../config";

app.post("/auth/login", routeAdapter(makeLoginController()));
