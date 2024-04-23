import { axiosClient } from "../../lib/axiosClient";

export async function uploadFileToStorage(formData: FormData) {
  const arrayOfPaths = await axiosClient.post("/file", formData);

  const result = await axiosClient.post(
    "/video",
    arrayOfPaths.data.pathsByType,
  );
  return result;
}
