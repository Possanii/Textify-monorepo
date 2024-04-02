import { UpdateUserController } from "../../application/controller/UpdateUserController";
import { makeUpdateUserService } from "../services/makeUpdateUserService";

export function makeUpdateUserController(){
    const updateUserService = makeUpdateUserService();

    return new UpdateUserController(updateUserService);
}