import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { destroyCookie, setCookie } from "nookies";
import { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { cookiesKeys } from "../config/cookiesKeys";
import { GetAccessToken } from "../hooks/getAccessToken";
import { IUser } from "../interfaces/IUser";
import { userServices } from "../services/userServices";

export interface AuthContextValue {
  isSignedIn: boolean;
  signin(accessToken: string): void;
  logout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const cacheAccessToken = GetAccessToken();
  const queryClient = useQueryClient();
  const router = useRouter();

  const [isSignedIn, setIsSignedIn] = useState(cacheAccessToken ? true : false);

  const { isError, isSuccess } = useQuery<{ user: IUser }>({
    queryKey: ["user", "me"],
    queryFn: async () => await userServices.GetMe(),
    staleTime: Infinity,
    enabled: isSignedIn,
  });

  const signin = useCallback((accessToken: string) => {
    setCookie(undefined, cookiesKeys.ACCESS_TOKEN, accessToken, {
      maxAge: 60 * 60 * 24, // 24 hours
    });
    setIsSignedIn(true);

    router.replace("/");
  }, []);

  const logout = useCallback(() => {
    destroyCookie(undefined, cookiesKeys.ACCESS_TOKEN);
    setIsSignedIn(false);
    queryClient.removeQueries();
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error("Your session has expired!");
      logout();
    }
  }, [isError, logout]);

  return (
    <AuthContext.Provider
      value={{ isSignedIn: (isSuccess && isSignedIn) || false, signin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
