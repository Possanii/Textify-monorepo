import { GetUserController } from "../../../application/controller/UserController/GetUserController";
import { makeGetUserService } from "../../services/UserServices/makeGetUserService";

export function makeGetUserController() {
  const getUserService = makeGetUserService();

  return new GetUserController(getUserService);
}
