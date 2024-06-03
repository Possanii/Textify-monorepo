import z, { ZodError } from "zod";
import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import { storageProvider } from "../../services/StorageServices";

const schema = z.object({
  name: z.string().min(1),
});

export class GetPresignedURLController implements IController {
  async handle({ params }: IRequest): Promise<IResponse> {
    try {
      const { name } = schema.parse(params);

      const presignedURL = await storageProvider.getPresignedURL({ name });

      return {
        statusCode: 200,
        body: { presignedURL },
      };
    } catch (err) {
      if (err instanceof ZodError) {
        return {
          statusCode: 422,
          body: { error: err },
        };
      }

      return {
        statusCode: 500,
        body: { error: "Internal error" },
      };
    }
  }
}
