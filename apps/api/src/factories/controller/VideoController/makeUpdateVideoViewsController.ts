import { UpdateVideoViewsController } from "../../../application/controller/VideoController/UpdateVideoViewsController";
import { makeUpdateVideoViewsService } from "../../services/VideoServices/makeUpdateVideoViewsServices";

export function makeViewsVideoController() {
  const viewVideoService =  makeUpdateVideoViewsService();

  return new UpdateVideoViewsController(viewVideoService);
}
