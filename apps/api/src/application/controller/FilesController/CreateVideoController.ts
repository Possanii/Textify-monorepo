import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import { CreateVideoService } from "../../services/FilesServices/CreateVideoService";
import { MinioStorageProvider } from "../../services/StorageServices/implementation/minio";
import { SpeechToTextService } from "../../services/TranscriptionServices/SpeechToTextService";

export class CreateVideoController implements IController {
  constructor(
    private readonly createVideoService: CreateVideoService,
    private readonly minioStorageProvider: MinioStorageProvider,
    private readonly transcriptService: SpeechToTextService,
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

        const transcription =
          await this.transcriptService.TranscribeAudioService(
            `audio/${file}`.slice(0, -1) + "3",
          );

        await this.createVideoService.execute({
          fileName: file,
          publicURL: urlStream,
          type: (key.split(":")[1] as "public") || "private",
          uploadedBy: user!.id,
          sizeInBytes: metadata.size,
          transcription,
        });
      }

      return {
        statusCode: 200,
        body: { message: "Successfully uploaded" },
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: { error: "Internal Error" },
      };
    }
  }
}
