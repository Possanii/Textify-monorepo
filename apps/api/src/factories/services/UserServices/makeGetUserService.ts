import { GetUserService } from "../../../application/services/UserServices/GetUserService";

export function makeGetUserService() {
  return new GetUserService();
}
