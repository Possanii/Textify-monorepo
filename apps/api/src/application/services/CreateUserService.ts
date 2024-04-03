import { userModel } from "../../../schemas/userSchema";
import { EmailAlreadyExists } from "../exceptions/UserExceptions";
import { IUser } from "../interfaces/IUser";
import { bcrypt } from "../utils/jsonWebToken";

export class CreateUserService {
  async execute(data: IUser): Promise<{ user: IUser }> {
    const findEmail = await userModel.findOne({
      email: data.email,
    });

    if (findEmail) {
      throw new EmailAlreadyExists();
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(data.password, salt);

    const user = await userModel.create({
      name: data.name,
      email: data.email,
      password: passwordHash,
    });

    await user.save();

    return {
      user,
    };
  }
}
