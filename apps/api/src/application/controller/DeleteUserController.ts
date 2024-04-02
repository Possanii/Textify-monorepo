import z, { ZodError } from "zod";
import { IController, IResponse } from "../interfaces/IController";
import { DeleteUserService } from "../services/DeleteUserService";
import { IRequest } from "../interfaces/IRequest";
import { UserNotFound } from "../Exceptions/UserExceptions";

const schema = z.object({ 
    id: z.string()
 })

export class DeleteUserController implements IController{
    constructor(private readonly deleteUserService: DeleteUserService) {}
    async handle ({body}: IRequest): Promise<IResponse>{
        try{
            const data = schema.parse(body)
            const user = await this.deleteUserService.execute(data);

        return {
            body:user,
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
                    message : "Internal Error"
                }
            }
        } 
    }
}