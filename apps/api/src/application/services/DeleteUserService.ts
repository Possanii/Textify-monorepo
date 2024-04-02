import { UserNotFound } from "../Exceptions/UserExceptions";
import { IUser } from "../interfaces/IUser";
import { prismaClient } from "../utils/prismaClient";


export class DeleteUserService {
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

        const user = await prismaClient.user.delete({
            where: {
                id: data.id
            }
        });

        return  {message: "Deletado com sucesso!"}
    }
}
