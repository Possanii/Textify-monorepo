import z from "zod";
import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import { UpdateVideoViewsService } from "../../services/VideoServices/UpdateVideoViewsService";

const schema = z.object({
  id: z.string().min(10),
});

export class UpdateVideoViewsController implements IController {
  constructor(private readonly viewVideoService: UpdateVideoViewsService) {}

  async handle({ params }: IRequest): Promise<IResponse> {
    try {
      const { id: videoId } = schema.parse(params);

      const result = await this.viewVideoService.execute(videoId);

      return {
        statusCode: 200,
        body: result,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: { error: "Internal Error" },
      };
    }
  }
}
