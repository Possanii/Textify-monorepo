import { CreateVideoController } from "../../../application/controller/FilesController/CreateVideoController";
import { MinioStorageProvider } from "../../../application/services/StorageServices/implementation/minio";
import { makeGetFileNameWithoutHashService } from "../../files/makeGetFileNameWithoutHashService";
import { makeTranscriptionService } from "../../services/TranscriptionServices/makeTranscriptionService";
import { makeCreateVideoServices } from "../../services/VideoServices/makeCreateVideoServices";

export function makeCreateVideoController() {
  const createVideoService = makeCreateVideoServices();
  const minioStorageProvider = new MinioStorageProvider();
  const transcriptionService = makeTranscriptionService();
  const getFileNameWithoutHashService = makeGetFileNameWithoutHashService();

  return new CreateVideoController(
    createVideoService,
    minioStorageProvider,
    transcriptionService,
    getFileNameWithoutHashService,
  );
}
