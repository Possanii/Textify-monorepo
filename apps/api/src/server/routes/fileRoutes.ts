import { makeCreateUrlStreamController } from "../../factories/files/makeCreateUrlStreamController";
import { makeDeleteFileController } from "../../factories/files/makeDeleteFIleController";
import { makeGetPresignedURLController } from "../../factories/files/makeGetPresignedURLController";
import { makeUploadFilesController } from "../../factories/files/makeUploadFilesController";
import { makeAuthenticationMiddleware } from "../../factories/middleware/makeAuthenticationMiddleware";
import { middlewareAdapter } from "../adapters/middlewareAdapter";
import { routeAdapter } from "../adapters/routeAdapter";
import app from "../config";

app.post(
  "/file",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeUploadFilesController()),
);

app.get(
  "/file/getPresignedURL/:name",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeGetPresignedURLController()),
);

app.get("/file/:folder/:path", routeAdapter(makeCreateUrlStreamController()));

app.delete(
  "/file/:folder/:path",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeDeleteFileController()),
);
