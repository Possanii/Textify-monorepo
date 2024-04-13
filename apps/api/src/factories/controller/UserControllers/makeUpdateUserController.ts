import { UpdateUserController } from "../../../application/controller/UserController/UpdateUserController";
import { makeUpdateUserService } from "../../services/UserServices/makeUpdateUserService";

export function makeUpdateUserController() {
  const updateUserService = makeUpdateUserService();

  return new UpdateUserController(updateUserService);
}
