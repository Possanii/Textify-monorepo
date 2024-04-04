import z, { ZodError } from "zod";
import {
  EmailAlreadyExists,
  PasswordNotEquals,
} from "../exceptions/UserExceptions";
import { IController, IResponse } from "../interfaces/IController";
import { IRequest } from "../interfaces/IRequest";
import { LoginService } from "../services/AuthenticationServices/LoginService";
import { CreateUserService } from "../services/CreateUserService";

const schema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

export class CreateUserController implements IController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly loginService: LoginService
  ) {}

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const data = schema.parse(body);

      const user = await this.createUserService.execute(data);

      const { token } = await this.loginService.execute(data);

      return {
        body: {
          message: "Usuário Criado com sucesso!",
          user,
          token,
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
      if (err instanceof EmailAlreadyExists) {
        return {
          statusCode: 409,
          body: {
            message: "Email já existente",
          },
        };
      }
      if (err instanceof PasswordNotEquals) {
        return {
          statusCode: 422,
          body: {
            message: "Senhas não conferem",
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
