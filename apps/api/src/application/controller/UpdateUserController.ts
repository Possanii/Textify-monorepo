import z, { ZodError } from "zod";
import { IController, IResponse } from "../interfaces/IController";
import { IRequest } from "../interfaces/IRequest";
import { UpdateUserService } from "../services/UpdateUserService";
import { UserNotFound } from "../Exceptions/UserExceptions";

const schema = z.object({
    name: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(6)
})

export class UpdateUserController implements IController{
    constructor(private readonly updateUserService: UpdateUserService) {}
    async handle({body}: IRequest): Promise<IResponse> {
        try{
            const data = schema.parse(body)
            const user = await this.updateUserService.execute(data);

            return {
                body: user,
                statusCode:200
            }
        } catch (err){
            if(err instanceof ZodError){
                return {
                    body:err,
                    statusCode:422
                }
            }
            if(err instanceof UserNotFound){
                return {
                    statusCode: 404,
                    body: {
                        message: "Usuário não encontrado"
                    }
                }
            }
            
            



            return {
                statusCode:500,
                body: {
                    message: "Internal Server Error"
                }
            }
        }
    }
}