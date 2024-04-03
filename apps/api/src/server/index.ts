import { env } from "../application/config/env";
import "../application/utils/mongooseClient";
import { makeLoginController } from "../factories/controller/AutenticationControllers/makeLoginController";
import { routeAdapter } from "./adapters/routeAdapter";
import app from "./config";
import { makeCreateUserController } from "../factories/controller/makeCreateUserController";
import { makeDeleteUserController } from "../factories/controller/makeDeleteUserController";
import { makeUpdateUserController } from "../factories/controller/makeUpdateUserController";
import { env } from "../application/config/env";
import "../application/utils/mongooseClient"
import { makeLoginController } from "../factories/controller/AutenticationControllers/makeLoginController";
import { checkToken } from "../application/utils/checkTokenFunction";

// Public Routes
app.post("/create", routeAdapter(makeCreateUserController()));
app.post("/auth/login", routeAdapter(makeLoginController()))



// Private Routes - Only Authenticated Users
app.put("/update", checkToken, routeAdapter(makeUpdateUserController()))
app.delete("/delete", checkToken, routeAdapter(makeDeleteUserController()))


app.listen(env.API_PORT, () =>
  console.log("🔥 Server listening on port " + env.API_PORT)
);


