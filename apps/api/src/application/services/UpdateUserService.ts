import { genSalt, hash } from "bcryptjs";
import { userModel } from "../../../schemas/userSchema";
import { EmailAlreadyExists, UserNotFound } from "../exceptions/UserExceptions";
import { IUser } from "../interfaces/IUser";

export class UpdateUserService {
  async execute(data: IUser): Promise<void> {
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

    const salt = await genSalt(12);
    const passwordHash = await hash(data.password!, salt);

    await userModel.findByIdAndUpdate(data.id, {
      name: data.name,
      email: data.email,
      password: passwordHash,
    });
    return;
  }
}
