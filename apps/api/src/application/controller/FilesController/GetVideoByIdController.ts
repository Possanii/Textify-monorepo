import z from "zod";
import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import { GetVideoByIdService } from "../../services/FilesServices/GetVideoByIdService";

const schema = z.object({
  videoId: z.string().min(10),
});

export class GetVideoByIdController implements IController {
  constructor(private readonly getVideoByIdService: GetVideoByIdService) {}

  async handle({ params }: IRequest): Promise<IResponse> {
    try {
      const { videoId } = schema.parse(params);

      const video = await this.getVideoByIdService.execute(videoId);

      return {
        statusCode: 200,
        body: { video },
      };
    } catch (error) {
      return {
        statusCode: 200,
        body: { error: "Internal Error" },
      };
    }
  }
}
