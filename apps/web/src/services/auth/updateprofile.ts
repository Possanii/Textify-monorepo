import { axiosClient } from "../../lib/axiosClient";

interface IInput {
  //file: File;
  name: string;
  email: string;
  password: string;
  newPassword: string;
}

export async function updateprofile(body: IInput) {
  const { data } = await axiosClient.put("/user/update", body);

  return data;
}
