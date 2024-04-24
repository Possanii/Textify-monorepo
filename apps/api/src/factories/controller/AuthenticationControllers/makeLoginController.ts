import { LoginController } from "../../../application/controller/AutenticationControllers/LoginController";
import { makeLoginService } from "../../services/AutenticationServices/makeLoginService";

export function makeLoginController() {
    const loginService = makeLoginService(); 

    return new LoginController(loginService);
  }