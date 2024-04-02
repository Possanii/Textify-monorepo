import { IUser } from "../interfaces/IUser";
import { prismaClient } from "../utils/prismaClient";

export class CreateUserService{
    async execute(data: IUser): Promise<{ user: IUser }> {

        console.log("Rota foi chamada!")
        
        const user = await prismaClient.user.create({
            data:{
                name: data.name!,
                email: data.email!,
                password: data.password!
            }
        })
        return {
          user
        };
      }
}