import OpenAI from "openai";
import * as fs from 'fs';

export class SpeechToTextService {
    private client: OpenAI;

    constructor() {
        // Crie uma instância do cliente OpenAI
        this.client = new OpenAI({
            apiKey: 'sk-proj-rzXo6KIr0m7sbk2OjDzqT3BlbkFJ7TPIbI9pgkrQTNz7f6YW' 
        });
    }

    async transcribeAudio(filePath: string): Promise<string> {
        try {
            const audioStream = await this.readAudioFile(filePath);

            // Crie a transcrição de áudio usando a API OpenAI
            const transcription = await this.client.audio.transcriptions.create({
                model: 'whisper-1',
                file: audioStream,
            });

            // Retorne a transcrição de texto
            return transcription.text;
        } catch (error) {
            throw new Error('Erro ao transcrever o áudio: ' + error);
        }
    }

    private readAudioFile(filePath: string): Promise<fs.ReadStream> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(filePath);
            stream.on('open', () => {
                resolve(stream);
            });
            stream.on('error', (err) => {
                reject(err);
            });
        });
    }
}