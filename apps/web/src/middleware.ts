import { NextRequest, NextResponse } from "next/server";
import { cookiesKeys } from "./config/cookiesKeys";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(cookiesKeys.ACCESS_TOKEN)?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/perfil", "/upload"],
};
