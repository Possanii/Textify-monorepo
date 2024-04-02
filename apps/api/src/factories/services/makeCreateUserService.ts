import { CreateUserService } from "../../application/services/CreateUserService";

export function makeCreateUserService() {
    return new CreateUserService();
  }