import z from "zod";
import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import { storageProvider } from "../../services/storage";

const schema = z.object({
  folder: z.string().min(3),
  path: z.string().min(3),
});

export class DeleteFileController implements IController {
  async handle({ params }: IRequest): Promise<IResponse> {
    try {
      const { folder, path } = schema.parse(params);

      const fullPath = folder + "/" + path;

      await storageProvider.delete(fullPath);

      return {
        statusCode: 200,
        body: { message: "File deleted successfully" },
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: { error: "Internal Error" },
      };
    }
  }
}
