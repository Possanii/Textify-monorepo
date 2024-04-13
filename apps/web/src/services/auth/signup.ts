import { axiosClient } from "../../lib/axiosClient";

interface IInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type IOutput = {
  accessToken: { accessToken: string };
};

export async function signup(body: IInput) {
  const { data } = await axiosClient.post<IOutput>("/auth/signup", body);

  return data;
}
