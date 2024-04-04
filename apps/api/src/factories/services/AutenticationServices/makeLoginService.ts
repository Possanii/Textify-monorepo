import { LoginService } from "../../../application/services/AuthenticationServices/LoginService";

export function makeLoginService() {
  return new LoginService();
}
