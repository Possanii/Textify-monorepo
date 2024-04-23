import { makeCreateVideoController } from "../../factories/controller/VideoController/makeCreateVideoController";
import { makeAuthenticationMiddleware } from "../../factories/middleware/makeAuthenticationMiddleware";
import { middlewareAdapter } from "../adapters/middlewareAdapter";
import { routeAdapter } from "../adapters/routeAdapter";
import app from "../config";

app.post(
  "/video",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeCreateVideoController()),
);
