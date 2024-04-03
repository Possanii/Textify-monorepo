import z, { ZodError } from "zod";
import { InvalidPassword, UserNotFound } from "../../exceptions/UserExceptions";
import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import { LoginService } from "../../services/AutenticationServices/LoginService";

const schema = z.object({
    email: z.string().min(4),
    password: z.string().min(6)
})

export class LoginController implements IController {
  constructor(private readonly loginService: LoginService) {}

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const data = schema.parse(body);
      const user = await this.loginService.execute(data);

      return {
        body: {
          user,
        },
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
            message: "Usuário não encontrado!",
          },
        };
      }
      if (err instanceof InvalidPassword) {
        return {
          statusCode: 422,
          body: {
            message: "Senha inválida!",
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
