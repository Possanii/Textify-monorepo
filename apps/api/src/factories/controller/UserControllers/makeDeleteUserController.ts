import { DeleteUserController } from "../../../application/controller/UserController/DeleteUserController";
import { makeDeleteUserService } from "../../services/UserServices/makeDeleteUserService";

export function makeDeleteUserController() {
  const deleteUserService = makeDeleteUserService();

  return new DeleteUserController(deleteUserService);
}
