import { UserNotFound } from "../../exceptions/UserExceptions";
import { IUser } from "../../interfaces/IUser";
import { userModel } from "../../schemas/userSchema";

export class GetAllUsersService {
  async execute(): Promise<IUser[]> {
    const users = await userModel.find();

    if (!users) throw new UserNotFound();

    return users;
  }
}
