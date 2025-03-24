"use client";

import { getCookie } from "cookies-next/client";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const token = getCookie("access_token");
  if (token) {
    redirect("/admin");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    console.log(response);
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    }
    if (response.ok) {
      redirect("/admin");
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}
