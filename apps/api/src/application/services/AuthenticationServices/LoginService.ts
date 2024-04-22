import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { env } from "../../config/env";
import { InvalidPassword, UserNotFound } from "../../exceptions/UserExceptions";
import { IUser } from "../../interfaces/IUser";
import { userModel } from "../../schemas/userSchema";

export class LoginService {
  async execute(data: IUser): Promise<{ accessToken: string }> {
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

    const accessToken = sign({ sub: userLogin.id }, env.SECRET, {
      expiresIn: 60 * 60 * 24,
    }); // 24 hours

    return {
      accessToken,
    };
  }
}
