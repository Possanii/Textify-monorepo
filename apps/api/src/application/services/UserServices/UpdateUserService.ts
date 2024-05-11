import { genSalt, hash } from "bcryptjs";
import {
  EmailAlreadyExists,
  UserNotFound,
} from "../../exceptions/UserExceptions";
import { IUser } from "../../interfaces/IUser";
import { userModel } from "../../schemas/userSchema";

export interface IUpdateUser
  extends Pick<IUser, "id" | "email" | "name" | "password"> {
  newPassword: string | undefined;
}

export class UpdateUserService {
  async execute(data: IUpdateUser): Promise<void> {
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

    let passwordHash = undefined;

    if (data.newPassword) {
      const salt = await genSalt(12);
      passwordHash = await hash(data.newPassword!, salt);
    }

    await userModel.findByIdAndUpdate(data.id, {
      name: data.name,
      email: data.email,
      password: passwordHash,
    });
    return;
  }
}
