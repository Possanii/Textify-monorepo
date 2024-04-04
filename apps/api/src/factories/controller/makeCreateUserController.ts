import { CreateUserController } from "../../application/controller/CreateUserController";
import { makeLoginService } from "../services/AutenticationServices/makeLoginService";
import { makeCreateUserService } from "../services/makeCreateUserService";

export function makeCreateUserController() {
  const createUserService = makeCreateUserService();
  const loginService = makeLoginService();

  return new CreateUserController(createUserService, loginService);
}
