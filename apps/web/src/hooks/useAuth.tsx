import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function UseAuth() {
  return useContext(AuthContext);
}
