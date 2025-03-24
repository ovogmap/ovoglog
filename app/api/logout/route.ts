import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  (await cookies()).delete("access_token");
  return NextResponse.json({ message: "로그아웃 성공" });
}
