import { userModel } from "../../../schemas/userSchema";
import { UserNotFound } from "../exceptions/UserExceptions";
import { IUser } from "../interfaces/IUser";

export class DeleteUserService {
  async execute(data: IUser): Promise<{ message: string }> {
    const findUser = await userModel.findById(data.id);

    if (!findUser) {
      throw new UserNotFound();
    }

    await userModel.deleteOne({
      id: data.id,
    });

    return { message: "Deletado com sucesso!" };
  }
}
