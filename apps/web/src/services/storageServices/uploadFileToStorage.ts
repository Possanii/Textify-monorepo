import { axiosClient } from "../../lib/axiosClient";

export async function uploadFileToStorage(formData: FormData) {
  const arrayOfPaths = await axiosClient.post("/file", formData, {
    timeout: 30000,
  });

  const result = await axiosClient.post(
    "/video",
    arrayOfPaths.data.pathsByType,
    { timeout: 30000 },
  );
  return result;
}
