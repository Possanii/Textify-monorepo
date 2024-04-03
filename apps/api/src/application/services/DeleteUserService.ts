import { userModel } from "../../../schemas/userSchema";
import { UserNotFound } from "../exceptions/UserExceptions";
import { IUser } from "../interfaces/IUser";

export class DeleteUserService {
  async execute(data: IUser): Promise<{ message: string }> {
   
    const findUser = await userModel.findByIdAndDelete(data.id);

    if (!findUser) {
      throw new UserNotFound();
    }

    return { message: "Deletado com sucesso!" };
  }
}
