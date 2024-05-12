import SpeechToTextService from "../../../application/services/OpenAiServices/SpeechToTextService";

export function makeTranscriptionService(){
    return new SpeechToTextService();
}