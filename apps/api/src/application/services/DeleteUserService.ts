import { userModel } from "../../../schemas/userSchema";
import { UserNotFound } from "../Exceptions/UserExceptions";
import { IUser } from "../interfaces/IUser";



export class DeleteUserService {
    async execute(data: IUser): Promise<{message: string}> {
        console.log("Rota foi chamada!");
        
        const findUser = await userModel.findById(data.id)
        
        if(!findUser){
            throw new UserNotFound()
        }

        const user = await userModel.deleteOne({
            id: data.id
        });

        return  {message: "Deletado com sucesso!"}
    }
}
