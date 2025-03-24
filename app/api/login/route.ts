import { supabasePublicClient } from "@/app/utils/supabasePublic";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { email, password } = await req.json();

  const { data, error } = await supabasePublicClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.session) {
    return NextResponse.json({ error: "로그인 실패" }, { status: 401 });
  }

  const { access_token } = data.session;

  // 쿠키 저장
  (await cookies()).set({
    name: "access_token",
    value: access_token,
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 1, // 1시간
  });

  return NextResponse.json({ message: "로그인 성공" });
}
