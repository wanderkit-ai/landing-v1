import { NextResponse } from "next/server";

const ADMIN_COOKIE = "admin_auth";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set({
    name: ADMIN_COOKIE,
    value: "",
    path: "/",
    maxAge: 0,
  });
  return response;
}
