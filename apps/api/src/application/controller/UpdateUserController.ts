import z, { ZodError } from "zod";
import { EmailAlreadyExists, UserNotFound } from "../exceptions/UserExceptions";
import { IController, IResponse } from "../interfaces/IController";
import { IRequest } from "../interfaces/IRequest";
import { UpdateUserService } from "../services/UpdateUserService";

const schema = z
  .object({
    id: z.string().min(1),
    name: z.string().min(3).optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
  })
  .refine(
    (data) => {
      if (!data.name && !data.email && !data.password) {
        return false;
      }
      return true;
    },
    { message: "Nada para atualizar" }
  );

export class UpdateUserController implements IController {
  constructor(private readonly updateUserService: UpdateUserService) {}
  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const data = schema.parse(body);
      const user = await this.updateUserService.execute(data);

      return {
        body: user,
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
          message: "Internal Server Error",
        },
      };
    }
  }
}
