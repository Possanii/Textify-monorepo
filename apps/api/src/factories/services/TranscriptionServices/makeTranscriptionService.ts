import { SpeechToTextService } from "../../../application/services/OpenAiServices/SpeechToTextService";
import { MinioStorageProvider } from "../../../application/services/StorageServices/implementation/minio";

export function makeTranscriptionService() {
  const minioService = new MinioStorageProvider();

  return new SpeechToTextService(minioService);
}
