import { DeleteUserController } from "../../application/controller/DeleteUserController";
import { makeDeleteUserService } from "../services/makeDeleteUserService";

export function makeDeleteUserController() {
    const deleteUserService = makeDeleteUserService(); 
    
        return new DeleteUserController(deleteUserService);
      }