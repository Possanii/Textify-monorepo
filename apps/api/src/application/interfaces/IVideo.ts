export interface IVideo {
  id: string;
  fileName: string;
  sizeInBytes: number;
  type: "public" | "private";
  publicURL: string;
  views: number;
  likes: number;
  dislikes: number;
  transcription: string;
  uploadedBy: string;
  uploadedAt: Date;
}
