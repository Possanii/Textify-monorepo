import { UserNotFound } from "../../exceptions/UserExceptions";
import { IController, IResponse } from "../../interfaces/IController";
import { GetAllUsersService } from "../../services/UserServices/GetAllUsersService";

export class GetAllUsersController implements IController {
  constructor(private readonly getAllUsersService: GetAllUsersService) {}

  async handle(): Promise<IResponse> {
    try {
      const users = await this.getAllUsersService.execute();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      if (error instanceof UserNotFound) {
        return {
          statusCode: 404,
          body: { error: "Users not found" },
        };
      }

      return {
        statusCode: 500,
        body: { error: "Internar error " },
      };
    }
  }
}
