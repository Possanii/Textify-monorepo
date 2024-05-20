import { model, Schema } from "mongoose";
import { IVideo } from "../interfaces/IVideo";

const videoSchema = new Schema<IVideo>({
  fileName: { type: String, required: true },
  sizeInBytes: { type: Number, required: true },
  type: { type: String, enum: ["public", "private"], required: true },
  publicURL: { type: String },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  transcription: { type: String, required: true, default: null },
  uploadedBy: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now() },
});

export const videoModal = model<IVideo>("Videos", videoSchema);
