import { axiosClient } from "../../lib/axiosClient";

type IInput = {
  email: string;
  password: string;
};

type IOutput = {
  accessToken: { accessToken: string };
};

export async function signin(body: IInput) {
  const { data } = await axiosClient.post<IOutput>("/auth/login", body);

  return data;
}
