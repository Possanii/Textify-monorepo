import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { userModel } from "../../../../schemas/userSchema";
import { env } from "../../config/env";
import { InvalidPassword, UserNotFound } from "../../exceptions/UserExceptions";
import { IUser } from "../../interfaces/IUser";

export class LoginService {
  async execute(data: IUser): Promise<{ token: string }> {
    const userLogin = await userModel.findOne({
      email: data.email,
    });

    if (!userLogin) {
      throw new UserNotFound();
    }

    const checkPassword = await compare(data.password!, userLogin.password!);

    if (!checkPassword) {
      throw new InvalidPassword();
    }

    const token = sign({ sub: userLogin.id }, env.SECRET, {
      expiresIn: 60 * 60 * 24,
    }); // 24 hours

    return {
      token,
    };
  }
}
