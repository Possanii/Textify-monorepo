import { CreateUserController } from "../../../application/controller/UserController/CreateUserController";
import { makeLoginService } from "../../services/AutenticationServices/makeLoginService";
import { makeCreateUserService } from "../../services/UserServices/makeCreateUserService";

export function makeCreateUserController() {
  const createUserService = makeCreateUserService();
  const loginService = makeLoginService();

  return new CreateUserController(createUserService, loginService);
}
