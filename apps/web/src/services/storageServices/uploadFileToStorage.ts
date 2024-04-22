import { axiosClient } from "../../lib/axiosClient";

export async function uploadFileToStorage(formData: FormData) {
  const arrayOfPaths = await axiosClient.post("/file", formData);

  return arrayOfPaths;
}
