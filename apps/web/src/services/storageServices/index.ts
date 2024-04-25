import { getAllVideosFromMongo } from "./getAllVideosFromMongo";
import { getVideoById } from "./getVideoById";
import { uploadFileToStorage } from "./uploadFileToStorage";

export const storageServices = {
  uploadFileToStorage,
  getAllVideosFromMongo,
  getVideoById,
};
