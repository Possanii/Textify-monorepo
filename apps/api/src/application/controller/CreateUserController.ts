import z, { ZodError } from "zod";
import { EmailAlreadyExists, PasswordNotEquals } from "../Exceptions/UserExceptions";
import { IController, IResponse } from "../interfaces/IController";
import { IRequest } from "../interfaces/IRequest";
import { CreateUserService } from "../services/CreateUserService";

const schema = z.object({ 
    name: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(6),
    confirmedpassword: z.string().min(6)
 })

export class CreateUserController implements IController{
    constructor(private readonly createUserService: CreateUserService) {}
    async handle ({body}: IRequest): Promise<IResponse>{
        try{
            const data = schema.parse(body)
            const user = await this.createUserService.execute(data);

        return {
            body: {
                message: "Usuário Criado com sucesso!",
                user
            },
            statusCode:200
        }

        } catch (err){
            if(err instanceof ZodError){
                return {
                    body:err,
                    statusCode:422
                }
            }
            if(err instanceof EmailAlreadyExists){
                return {
                    statusCode: 409,
                    body: {
                        message: "Email já existente"
                    }
                }
            }
            if(err instanceof PasswordNotEquals){
                return{
                    statusCode:422,
                    body:{
                        message: "Senhas não conferem!"
                    }
                }
            }
            return {
                statusCode:500,
                body: {
                    message : "Internal Error"
                }
            }
        } 
    }
}
