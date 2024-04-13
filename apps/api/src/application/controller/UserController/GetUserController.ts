import { UserNotFound } from "../../exceptions/UserExceptions";
import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import { GetUserService } from "../../services/UserServices/GetUserService";

export class GetUserController implements IController {
  constructor(private readonly getUserService: GetUserService) {}

  async handle({ user }: IRequest): Promise<IResponse> {
    try {
      const userInfo = await this.getUserService.execute({ id: user!.id });

      return {
        statusCode: 200,
        body: { userInfo },
      };
    } catch (error) {
      if (error instanceof UserNotFound) {
        return {
          statusCode: 404,
          body: { error: "User not found" },
        };
      }

      return {
        statusCode: 500,
        body: { error: "Internal error" },
      };
    }
  }
}
