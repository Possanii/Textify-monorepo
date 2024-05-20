import { CreateVideoController } from "../../../application/controller/FilesController/CreateVideoController";
import { MinioStorageProvider } from "../../../application/services/StorageServices/implementation/minio";
import { makeTranscriptionService } from "../../services/TranscriptionServices/makeTranscriptionService";
import { makeCreateVideoServices } from "../../services/VideoServices/makeCreateVideoServices";

export function makeCreateVideoController() {
  const createVideoService = makeCreateVideoServices();
  const minioStorageProvider = new MinioStorageProvider();
  const transcriptionService = makeTranscriptionService();

  return new CreateVideoController(
    createVideoService,
    minioStorageProvider,
    transcriptionService,
  );
}
