import { AssemblyAI } from "assemblyai";
import * as fs from "fs";
import { env } from "../../config/env";
import { MinioStorageProvider } from "../StorageServices/implementation/minio";

export class SpeechToTextService {
  constructor(private readonly storage: MinioStorageProvider) {}

  async TranscribeAudioService(filePath: string): Promise<string> {
    try {
      const fileUrl = await this.storage.getFile({ path: filePath });

      const file = fs.createReadStream(fileUrl);

      const client = new AssemblyAI({
        apiKey: env.ASSEMBLYAI_KEY,
      });

      const params = {
        audio: file,
      };

      const transcript = await client.transcripts.transcribe(params);

      fs.unlinkSync(fileUrl);

      return transcript.text!;
    } catch (error) {
      throw new Error("Erro ao transcrever o áudio: " + error);
    }
  }
}
