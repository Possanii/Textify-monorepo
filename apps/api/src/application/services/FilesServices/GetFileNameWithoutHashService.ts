export class GetFileNameWithoutHashService {
  execute({ fileName }: { fileName: string }): string {
    // Regex ajustada para lidar com o prefixo "public/"
    const regex = /^public\/[\d-]+-[a-f\d]+-(.+)\.mp4$/;
    const match = fileName.match(regex);

    if (match && match[1]) {
      return match[1];
    } else {
      throw new Error("Formato de nome de arquivo inválido");
    }
  }
}
