import { IUser } from "../../interfaces/IUser";
import { axiosClient } from "../../lib/axiosClient";

type IOutput = {
  user: IUser;
};

export async function GetMe() {
  const { data } = await axiosClient.get<IOutput>("/user");

  return data;
}
