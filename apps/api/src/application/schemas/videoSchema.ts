import { model, Schema } from "mongoose";
import { IVIdeo } from "../interfaces/IVideo";

const videoSchema = new Schema<IVIdeo>({
  fileName: { type: String, required: true },
  sizeInBytes: { type: Number, required: true },
  durationInSeconds: { type: Number, required: true },
  type: { type: String, enum: ["public", "private"], required: true },
  publicURL: { type: String },
});

export const videoModal = model<IVIdeo>("Videos", videoSchema);
