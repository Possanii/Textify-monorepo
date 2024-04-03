import { userModel } from "../../../schemas/userSchema";
import { EmailAlreadyExists, PasswordNotEquals } from "../Exceptions/UserExceptions";
import { IUser } from "../interfaces/IUser";
import { bcrypt } from "../utils/jsonWebToken";



export class CreateUserService{
    async execute(data: IUser): Promise<{ user: IUser }> {

        console.log("Rota foi chamada!")

      const findEmail = await userModel.findOne({
        email: data.email
      })

      if(findEmail){
        throw new EmailAlreadyExists();
      }

      if(data.password !== data.confirmedpassword){
        throw new PasswordNotEquals();
      }

      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(data.password, salt);

        const user = await userModel.create({
          name: data.name,
          email: data.email,
          password: passwordHash,
        })

        await user.save();

        return {
          user
        };
      }
}