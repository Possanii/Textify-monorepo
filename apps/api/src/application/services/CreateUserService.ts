import { userModel } from "../../../schemas/userSchema";
import { IUser } from "../interfaces/IUser";


export class CreateUserService{
    async execute(data: IUser): Promise<{ user: IUser }> {

        console.log("Rota foi chamada!")
        
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