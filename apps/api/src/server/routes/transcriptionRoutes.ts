import { routeAdapter } from "../adapters/routeAdapter";
import app from "../config";
import { makeTranscriptionController } from "../../factories/controller/TranscriptionControllers/makeTranscriptionController";
import { makeTranscriptionService } from "../../factories/services/TranscriptionServices/makeTranscriptionService";


app.post("/transcribe", routeAdapter(makeTranscriptionController));