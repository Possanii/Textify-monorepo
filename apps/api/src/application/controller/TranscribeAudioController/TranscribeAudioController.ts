import z, { ZodError } from "zod";
import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import { SpeechToTextService } from "../../services/TranscriptionServices/SpeechToTextService"; // Importe corretamente a classe SpeechToTextService

const schema = z.object({
  filePath: z.string().min(1),
});

export class TranscribeAudioController implements IController {
  constructor(private readonly speechToTextService: SpeechToTextService) {}

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { filePath } = schema.parse(body);

      const transcription =
        await this.speechToTextService.TranscribeAudioService(filePath);
      return {
        statusCode: 200,
        body: { transcription },
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 422,
          body: { message: "Invalid data", error: error.message },
        };
      }

      console.log(error);

      return {
        statusCode: 500,
        body: {
          message: "Internal Error",
          error: error,
        },
      };
    }
  }
}
