"use client";

import { getCookie } from "cookies-next/client";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Button, Container, Input } from "./styles.css";

export default function Login() {
  const token = getCookie("access_token");
  if (token) {
    redirect("/admin");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    }
    if (response.ok) {
      redirect("/admin");
    }
  };

  return (
    <form
      className={Container}
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <input
        autoFocus
        placeholder="email"
        className={Input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        className={Input}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className={Button}>
        로그인
      </button>
    </form>
  );
}
