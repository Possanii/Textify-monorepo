import z, { ZodError } from "zod";
import { EmailAlreadyExists } from "../exceptions/UserExceptions";
import { IController, IResponse } from "../interfaces/IController";
import { IRequest } from "../interfaces/IRequest";
import { CreateUserService } from "../services/CreateUserService";

const schema = z
  .object({
    name: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine(
    (data) => {
      if (data.password !== data.confirmPassword) {
        return false;
      }
      return true;
    },
    { message: "Senhas não conferem!", path: ["confirmPassword"] }
  );

export class CreateUserController implements IController {
  constructor(private readonly createUserService: CreateUserService) {}
  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { name, email, password } = schema.parse(body);
      const user = await this.createUserService.execute({
        name,
        email,
        password,
      });

      return {
        body: {
          message: "Usuário Criado com sucesso!",
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
      if (err instanceof EmailAlreadyExists) {
        return {
          statusCode: 409,
          body: {
            message: "Email já existente",
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
