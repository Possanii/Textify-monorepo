import { axiosClient } from "../../lib/axiosClient";

interface IInput {
  name: string;
  email: string;
  password: string;
}

export async function updateprofile(body: IInput) {
  const { data } = await axiosClient.put("/user/update", body);

  return data;
}
