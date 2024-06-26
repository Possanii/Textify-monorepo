import z, { ZodError } from "zod";
import {
  EmailAlreadyExists,
  UserNotFound,
} from "../../exceptions/UserExceptions";
import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import {
  IUpdateUser,
  UpdateUserService,
} from "../../services/UserServices/UpdateUserService";

const schema = z
  .object({
    id: z.string().min(1),
    name: z.string(),
    email: z.string().email("Email incorreto"),
    password: z.union([
      z.string().min(8, "Senha deve ter 8 dígitos"),
      z.string().refine((value) => value === ""),
    ]),
    newPassword: z.union([
      z.string().min(8, "Senha deve ter no minimo 8 digitos"),
      z.string().refine((value) => value === ""),
    ]),
  })
  .refine(
    (data) => {
      if (!data.name && !data.email && !data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    { message: "Nada para atualizar" },
  )
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      } else {
        return true;
      }
    },
    { path: ["newPassword"], message: "Informe a nova senha" },
  );

export class UpdateUserController implements IController {
  constructor(private readonly updateUserService: UpdateUserService) {}
  async handle({ body, user }: IRequest): Promise<IResponse> {
    try {
      const data = schema.parse({ id: user!.id, ...body });

      await this.updateUserService.execute(data as IUpdateUser);

      return {
        body: { message: "Atualizado com sucesso!" },
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
