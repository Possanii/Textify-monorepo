import { DeleteUserService } from "../../application/services/DeleteUserService";

export function makeDeleteUserService(){
    return new DeleteUserService();
}