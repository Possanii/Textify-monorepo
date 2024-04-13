import nookies from "nookies";
import { cookiesKeys } from "../config/cookiesKeys";

export function GetAccessToken() {
  const cookies = nookies.get();

  return cookies[cookiesKeys.ACCESS_TOKEN];
}
