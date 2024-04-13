import { UpdateUserService } from "../../../application/services/UserServices/UpdateUserService";

export function makeUpdateUserService() {
  return new UpdateUserService();
}
