import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import { GetAllPublicVideosService } from "../../services/FilesServices/GetAllPublicVideosService";

export class GetAllPublicVideosController implements IController {
  constructor(
    private readonly getAllPublicVideosService: GetAllPublicVideosService,
  ) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const videos = await this.getAllPublicVideosService.execute();

      return {
        statusCode: 200,
        body: { videos },
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: { error: "Internal Error" },
      };
    }
  }
}
