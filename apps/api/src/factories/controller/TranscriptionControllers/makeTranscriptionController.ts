import { makeTranscriptionService } from "../../services/TranscriptionServices/makeTranscriptionService";
import { TranscribeAudioController } from "../../../application/controller/TranscribeAudioController/TranscribeAudioController";

export function makeTranscriptionController(){
    const speechToTextService = makeTranscriptionService();
    
    return new TranscribeAudioController(speechToTextService);
}