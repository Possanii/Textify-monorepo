import { makeTranscriptionController } from "../../factories/controller/TranscriptionControllers/makeTranscriptionController";
import { routeAdapter } from "../adapters/routeAdapter";
import app from "../config";

app.post("/transcribe", routeAdapter(makeTranscriptionController()));
