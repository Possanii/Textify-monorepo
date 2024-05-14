import { TranscribeAudioController } from "../../../application/controller/TranscribeAudioController/TranscribeAudioController";
import { makeTranscriptionService } from "../../services/TranscriptionServices/makeTranscriptionService";

export function makeTranscriptionController() {
  const speechToTextService = makeTranscriptionService();

  return new TranscribeAudioController(speechToTextService);
}
