import { DeleteUserService } from "../../../application/services/UserServices/DeleteUserService";

export function makeDeleteUserService() {
  return new DeleteUserService();
}
