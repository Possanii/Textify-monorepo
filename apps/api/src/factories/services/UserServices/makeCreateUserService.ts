import { CreateUserService } from "../../../application/services/UserServices/CreateUserService";

export function makeCreateUserService() {
  return new CreateUserService();
}
