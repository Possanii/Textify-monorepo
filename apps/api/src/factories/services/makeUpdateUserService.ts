import { UpdateUserService } from "../../application/services/UpdateUserService";

export function makeUpdateUserService (){
    return new UpdateUserService();
}