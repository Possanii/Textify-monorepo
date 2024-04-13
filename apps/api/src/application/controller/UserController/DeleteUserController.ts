import z, { ZodError } from "zod";
import { UserNotFound } from "../../exceptions/UserExceptions";
import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import { DeleteUserService } from "../../services/UserServices/DeleteUserService";

const schema = z.object({
  id: z.string().min(3),
});

export class DeleteUserController implements IController {
  constructor(private readonly deleteUserService: DeleteUserService) {}
  async handle({ user }: IRequest): Promise<IResponse> {
    try {
      const data = schema.parse(user);
      await this.deleteUserService.execute(data);

      return {
        body: { message: "Deletado com sucesso!" },
        statusCode: 200,
      };
    } catch (err) {
      if (err instanceof ZodError) {
        return {
          body: err,
          statusCode: 422,
        };
      }
      if (err instanceof UserNotFound) {
        return {
          statusCode: 404,
          body: {
            message: "Usuário não encontrado",
          },
        };
      }
      return {
        statusCode: 500,
        body: {
          message: "Internal Error",
        },
      };
    }
  }
}
