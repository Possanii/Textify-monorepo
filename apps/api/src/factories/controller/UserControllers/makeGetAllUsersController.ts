import { GetAllUsersController } from "../../../application/controller/UserController/GetAllUsersController";
import { makeGetAllUsersService } from "../../services/UserServices/makeGetAllUsersService";

export function makeGetAllUsersController() {
  const getAllUsersService = makeGetAllUsersService();

  return new GetAllUsersController(getAllUsersService);
}
