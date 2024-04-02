import { IUser } from "../interfaces/IUser";
import { prismaClient } from "../utils/prismaClient";
import { UserNotFound } from "../Exceptions/UserExceptions";


export class UpdateUserService {
    async execute(data: IUser): Promise<{message: string}> {
        console.log("Rota foi chamada!");
        
        const findUser = await prismaClient.user.findFirst({
            where:{
                id: data.id
            }
        })

        if(!findUser){
            throw new UserNotFound()
        }

        const user = await prismaClient.user.update({
            where: {
                id: data.id!
            }, data:{
                name: data.name,
                email: data.email,
                password: data.password
            }
        });

        return  {message: "Atualizado com sucesso!"}
    }
}