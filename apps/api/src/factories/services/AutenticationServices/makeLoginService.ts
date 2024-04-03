import { LoginService } from "../../../application/services/AutenticationServices/LoginService";

export function makeLoginService(){
    return new LoginService();
}