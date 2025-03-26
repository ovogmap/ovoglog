"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function savePost({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const supabase = createServerActionClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("로그인이 필요합니다.");

  await supabase.from("posts").insert({
    title,
    content,
    user_id: user.id,
  });
}
