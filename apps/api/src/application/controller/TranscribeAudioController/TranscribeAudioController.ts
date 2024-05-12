import { Request, Response } from 'express';
import { SpeechToTextService } from '../../services/OpenAiServices/SpeechToTextService'; // Importe corretamente a classe SpeechToTextService

const speechToTextService = new SpeechToTextService();

export const TranscribeAudioController = async (req: Request, res: Response) => {
    const filePath = req.body.filePath;
    try {
        const transcription = await speechToTextService.transcribeAudio(filePath);
        res.json({ transcription });
    } catch (error) {
        res.status(500).json({ error: error }); // Melhore a resposta de erro incluindo apenas a mensagem de erro
    }
};


