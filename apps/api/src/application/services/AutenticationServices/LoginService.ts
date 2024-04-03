import { userModel } from "../../../../schemas/userSchema";
import {  InvalidPassword, UserNotFound } from "../../Exceptions/UserExceptions";
import { IUser } from "../../interfaces/IUser";
import { bcrypt, jsonwebtoken } from "../../utils/jsonWebToken";


export class LoginService{
    async execute(data: IUser): Promise <{message: string, token: string}>{
        const secret = process.env.SECRET
        console.log("Rota foi chamada!")

        const userLogin = await userModel.findOne({
            email: data.email
          })
    
          if(!userLogin){
            throw new UserNotFound();
          }

        const checkPassword = await bcrypt.compare(data.password, userLogin.password)

        if(!checkPassword){
            throw new InvalidPassword();
        }

        const token = jsonwebtoken.sign(
            { 
                id: data.id,
             },
             secret,
        )

        return {
            message:"Login efetuado com sucesso!",
            token
        };
    }
}