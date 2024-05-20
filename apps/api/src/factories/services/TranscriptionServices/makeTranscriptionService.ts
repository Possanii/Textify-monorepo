import { MinioStorageProvider } from "../../../application/services/StorageServices/implementation/minio";
import { SpeechToTextService } from "../../../application/services/TranscriptionServices/SpeechToTextService";

export function makeTranscriptionService() {
  const minioService = new MinioStorageProvider();

  return new SpeechToTextService(minioService);
}
