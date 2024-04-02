import { CreateUserController } from "../../application/controller/CreateUserController";
import { makeCreateUserService } from "../services/makeCreateUserService";

    export function makeCreateUserController() {
    const createUserService = makeCreateUserService(); 

    return new CreateUserController(createUserService);
  }