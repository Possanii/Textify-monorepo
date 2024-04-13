import { userModel } from "../../../../schemas/userSchema";
import { UserNotFound } from "../../exceptions/UserExceptions";
import { IUser } from "../../interfaces/IUser";

export class GetUserService {
  async execute({ id }: { id: string }): Promise<Partial<IUser>> {
    const user = await userModel.findById(id, {
      id: true,
      name: true,
      email: true,
    });

    if (!user) {
      throw new UserNotFound();
    }

    return user;
  }
}
