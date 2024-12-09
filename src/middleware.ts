import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib";

export async function middleware(req: NextRequest) {
  const response = await updateSession(req);
  return response || NextResponse.next();
}
