import z from "zod";
import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import { UpdateVideoLikesService } from "../../services/VideoServices/UpdateVideoLikesService";

const schema = z.object({
  id: z.string().min(10),
});

export class UpdateVideoLikesController implements IController {
  constructor(private readonly likeVideoService: UpdateVideoLikesService) {}

  async handle({ params }: IRequest): Promise<IResponse> {
    try {
      const { id: videoId } = schema.parse(params);

      const result = await this.likeVideoService.execute(videoId);

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
