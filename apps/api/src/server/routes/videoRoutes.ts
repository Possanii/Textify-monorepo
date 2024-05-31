import { makeCreateVideoController } from "../../factories/controller/VideoController/makeCreateVideoController";
import { makeGetAllPublicVideosController } from "../../factories/controller/VideoController/makeGetAllPublicVideosController";
import { makeGetVideoByIdController } from "../../factories/controller/VideoController/makeGetVideoByIdController";
import { makeLikeVideoController } from "../../factories/controller/VideoController/makeUpdateVideoLikesController";
import { makeDislikeVideoController } from "../../factories/controller/VideoController/makeUpdateVideoDislikesController";
import { makeAuthenticationMiddleware } from "../../factories/middleware/makeAuthenticationMiddleware";
import { middlewareAdapter } from "../adapters/middlewareAdapter";
import { routeAdapter } from "../adapters/routeAdapter";
import app from "../config";

app.post(
  "/video",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeCreateVideoController()),
);

app.get("/video/all", routeAdapter(makeGetAllPublicVideosController()));

app.get("/video/:videoId", routeAdapter(makeGetVideoByIdController()));

app.post("/video/:id/like", routeAdapter(makeLikeVideoController()));

app.post("/video/:id/dislike", routeAdapter(makeDislikeVideoController()));
