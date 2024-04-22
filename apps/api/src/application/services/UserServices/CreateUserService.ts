import { genSalt, hash } from "bcryptjs";
import {
  EmailAlreadyExists,
  PasswordNotEquals,
} from "../../exceptions/UserExceptions";
import { userModel } from "../../schemas/userSchema";

import { IUser } from "../../interfaces/IUser";

export class CreateUserService {
  async execute(data: IUser): Promise<void> {
    const findEmail = await userModel.findOne({
      email: data.email,
    });

    if (findEmail) {
      throw new EmailAlreadyExists();
    }

    if (data.password !== data.confirmPassword) {
      throw new PasswordNotEquals();
    }

    const salt = await genSalt(12);
    const passwordHash = await hash(data.password!, salt);

    const user = await userModel.create({
      name: data.name,
      email: data.email,
      password: passwordHash,
    });

    await user.save();
  }
}
