import { JwtPayload, verify } from "jsonwebtoken";
import { env } from "../config/env";
import { InvalidToken } from "../exceptions/TokenExceptions";
import { IData, IMiddleware, IResponse } from "../interfaces/IMiddleware";
import { IRequest } from "../interfaces/IRequest";

export class AuthenticationMiddleware implements IMiddleware {
  async handle({ headers }: IRequest): Promise<IResponse | IData> {
    const { authorization } = headers;

    if (!authorization) {
      return {
        statusCode: 401,
        body: {
          error: "Token inválido",
        },
      };
    }

    try {
      const [bearer, token] = authorization.split(" ");

      if (bearer !== "Bearer") {
        throw new InvalidToken();
      }

      const payload = verify(token!, env.SECRET) as JwtPayload;

      return {
        data: {
          user: {
            id: payload.sub,
          },
        },
      };
    } catch {
      return {
        statusCode: 401,
        body: {
          error: "Token inválido",
        },
      };
    }
  }
}
