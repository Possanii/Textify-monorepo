import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import { CreateVideoService } from "../../services/FilesServices/CreateVideoService";
import { MinioStorageProvider } from "../../services/StorageServices/implementation/minio";

export class CreateVideoController implements IController {
  constructor(
    private readonly createVideoService: CreateVideoService,
    private readonly minioStorageProvider: MinioStorageProvider,
  ) {}

  async handle({ body, user }: IRequest): Promise<IResponse> {
    try {
      const files: Record<string, string> = body;

      for (const [key, file] of Object.entries(files)) {
        const urlStream = await this.minioStorageProvider.createUrlStream({
          path: file,
        });

        const metadata = await this.minioStorageProvider.getMetadata({
          path: file,
        });

        await this.createVideoService.execute({
          fileName: file,
          publicURL: urlStream,
          type: (key.split(":")[1] as "public") || "private",
          uploadedBy: user!.id,
          sizeInBytes: metadata.size,
        });
      }

      return {
        statusCode: 200,
        body: { message: "Successfully uploaded" },
      };
    } catch (error) {
      console.log(error);

      return {
        statusCode: 500,
        body: { error: "Internal Error" },
      };
    }
  }
}
