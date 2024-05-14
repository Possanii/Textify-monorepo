import axios from "axios";
import * as fs from "fs";
import { env } from "../../config/env";
import { MinioStorageProvider } from "../StorageServices/implementation/minio";

export class SpeechToTextService {
  constructor(private readonly storage: MinioStorageProvider) {}

  async transcribeAudio(filePath: string): Promise<string> {
    try {
      const fileUrl = await this.storage.getFile({ path: filePath });

      const file = fs.createReadStream(fileUrl);

      const response = await axios.post(
        "https://api.openai.com/v1/audio/transcriptions",
        {
          file,
          model: "whisper-1",
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + env.OPENAI_KEY,
          },
        },
      );

      console.log(response.data.text);

      // Retorne a transcrição de texto
      return response.data.text;
    } catch (error) {
      console.log(error);

      throw new Error("Erro ao transcrever o áudio: " + error);
    }
  }
}
