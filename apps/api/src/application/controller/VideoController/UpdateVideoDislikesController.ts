import z from "zod";
import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import { UpdateVideoDislikesService } from "../../services/VideoServices/UpdateVideoDislikesService";

const schema = z.object({
  id: z.string().min(10),
});

export class UpdateVideoDislikesController implements IController {
  constructor(private readonly dislikeVideoService: UpdateVideoDislikesService) {}

  async handle({ params }: IRequest): Promise<IResponse> {
    try {
      const { id: videoId } = schema.parse(params);

      const result = await this.dislikeVideoService.execute(videoId);

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
