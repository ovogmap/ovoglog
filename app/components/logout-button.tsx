"use client";

// todo: 스타일 필요
export function LogoutButton() {
  const handleLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
    });
    if (response.ok) {
      window.location.href = "/login";
    }
  };

  return <button onClick={handleLogout}>로그아웃</button>;
}
