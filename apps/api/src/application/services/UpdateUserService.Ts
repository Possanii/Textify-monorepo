import { IUser } from "../interfaces/IUser";
import { UserNotFound } from "../Exceptions/UserExceptions";
import { userModel } from "../../../schemas/userSchema";


export class UpdateUserService {
    async execute(data: IUser): Promise<{message: string}> {
        console.log("Rota foi chamada!");
        
        const findUser = await userModel.findById(data.id)

        if(!findUser){
            throw new UserNotFound()
        }

        const user = await userModel.findByIdAndUpdate(data.id, {
            name:data.name, email: data.email, password:data.password
        });

        return  {message: "Atualizado com sucesso!"}
    }
}