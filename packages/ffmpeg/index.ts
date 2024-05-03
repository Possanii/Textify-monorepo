import ffmpegPath from "ffmpeg-static";
import ffmpeg from "fluent-ffmpeg";
import { tmpdir } from "os";
import { join } from "path";

// Set the path to the ffmpeg binary
ffmpeg.setFfmpegPath(ffmpegPath as string);

// Function to convert MP4 to MP3
export function convertMP4toMP3(
  inputFilePath: string,
  outputFilePath: string,
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const tempDir = tmpdir(); // Get the system's temporary directory
    const outputTempFilePath = join(tempDir, outputFilePath); // Create output file path in temporary directory

    ffmpeg(inputFilePath)
      .toFormat("mp3")
      .on("end", () => {
        console.log("Conversion complete");
        resolve(outputTempFilePath);
      })
      .on("error", (err) => {
        console.error("Error:", err.message);
        reject(err);
      })
      .save(outputTempFilePath);
  });
}
