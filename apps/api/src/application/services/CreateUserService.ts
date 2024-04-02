import { userModel } from "../../../schemas/userSchema";
import { EmailAlreadyExists } from "../Exceptions/UserExceptions";
import { IUser } from "../interfaces/IUser";


export class CreateUserService{
    async execute(data: IUser): Promise<{ user: IUser }> {

        console.log("Rota foi chamada!")
        
      const findEmail = await userModel.findOne({
        email: data.email
      })

      if(findEmail){
        throw new EmailAlreadyExists();
      }

        const user = await userModel.create({
          name: data.name,
          email: data.email,
          password: data.password
        })

        await user.save();

        return {
          user
        };
      }
}