import { GetAllUsersService } from "../../../application/services/UserServices/GetAllUsersService";

export function makeGetAllUsersService() {
  return new GetAllUsersService();
}
