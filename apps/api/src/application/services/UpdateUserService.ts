import { userModel } from "../../../schemas/userSchema";
import { EmailAlreadyExists, UserNotFound } from "../exceptions/UserExceptions";
import { IUser } from "../interfaces/IUser";

export class UpdateUserService {
  async execute(data: IUser): Promise<{ message: string }> {
    const findUser = await userModel.findById(data.id);

    if (!findUser) {
      throw new UserNotFound();
    }

    if (findUser.email !== data.email) {
      const findEmail = await userModel.findOne({
        email: data.email,
      });
      if (findEmail) {
        throw new EmailAlreadyExists();
      }
    }

    await userModel.findByIdAndUpdate(data.id, {
      name: data.name,
      email: data.email,
      password: data.password,
    });

    return { message: "Atualizado com sucesso!" };
  }
}
