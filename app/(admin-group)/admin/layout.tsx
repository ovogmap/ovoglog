import { createSupabaseWithToken } from "@/app/utils/supabaseWithToken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Header from "./components/header/header";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 토큰이 없는 경우는 middleware에서 처리
  const token = (await cookies()).get("access_token");

  // token 유효성 검사는 여기서 진행
  const supabase = createSupabaseWithToken(token!.value);
  const { data: user } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <body>
      <Header />
      {children}
    </body>
  );
}
